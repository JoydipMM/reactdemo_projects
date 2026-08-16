/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const path = require("node:path");
const ts = require("../node_modules/typescript");

require.extensions[".ts"] = function loadTs(module, filename) {
  const source = require("node:fs").readFileSync(filename, "utf8");
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true,
      target: ts.ScriptTarget.ES2020,
    },
    fileName: filename,
  });
  module._compile(output.outputText, filename);
};

const root = path.resolve(__dirname, "..");
const { defaultPage } = require(path.join(root, "features/page-builder/data/defaultPage.ts"));
const { validatePage } = require(path.join(root, "features/page-builder/schema/validation.ts"));
const {
  arrangeNode,
  cloneNode,
  collectIds,
  duplicateNode,
  findNode,
  findParent,
  insertNode,
  moveNode,
  removeNode,
  updateNode,
} = require(path.join(root, "features/page-builder/utils/treeUtils.ts"));
const { resolveResponsiveValue } = require(path.join(root, "features/page-builder/utils/responsiveUtils.ts"));

function test(name, fn) {
  try {
    fn();
    console.log(`ok - ${name}`);
  } catch (error) {
    console.error(`not ok - ${name}`);
    throw error;
  }
}

function makeNode(type) {
  return {
    id: `${type}-test`,
    type,
    kind: type === "container" ? "structure" : "widget",
    props: { text: type },
    styles: {},
    children: type === "container" ? [] : undefined,
  };
}

test("findNode and findParent locate nested nodes", () => {
  const page = defaultPage();
  const container = page.root.children[0];
  const heading = container.children[0];
  assert.equal(findNode(page.root, heading.id).id, heading.id);
  assert.equal(findParent(page.root, heading.id).id, container.id);
});

test("insertNode and removeNode preserve immutable page shape", () => {
  const page = defaultPage();
  const text = makeNode("text");
  const next = insertNode(page, page.root.id, text);
  assert.equal(findNode(next.root, text.id).id, text.id);
  assert.equal(findNode(page.root, text.id), null);
  const removed = removeNode(next, text.id);
  assert.equal(removed.removed.id, text.id);
  assert.equal(findNode(removed.page.root, text.id), null);
});

test("updateNode changes only the target subtree", () => {
  const page = defaultPage();
  const heading = page.root.children[0].children[0];
  const next = updateNode(page, heading.id, (node) => ({ ...node, props: { ...node.props, text: "Updated" } }));
  assert.equal(findNode(next.root, heading.id).props.text, "Updated");
  assert.equal(findNode(page.root, heading.id).props.text, "Welcome to My Website");
});

test("moveNode supports nested containers and rejects moving into descendants", () => {
  const page = defaultPage();
  const firstContainer = page.root.children[0];
  const nested = makeNode("container");
  const withNested = insertNode(page, firstContainer.id, nested);
  const heading = firstContainer.children[0];
  const moved = moveNode(withNested, heading.id, nested.id);
  assert.equal(findParent(moved.root, heading.id).id, nested.id);
  const invalid = moveNode(moved, nested.id, heading.id);
  assert.equal(findParent(invalid.root, nested.id).id, firstContainer.id);
});

test("moveNode reorders same-parent siblings using target drop index", () => {
  const page = defaultPage();
  const container = page.root.children[0];
  const first = container.children[0];
  const second = container.children[1];
  const third = container.children[2];

  const firstBeforeThird = moveNode(page, first.id, container.id, 2);
  assert.deepEqual(
    findNode(firstBeforeThird.root, container.id).children.map((child) => child.id),
    [second.id, first.id, third.id],
  );

  const thirdBeforeFirst = moveNode(page, third.id, container.id, 0);
  assert.deepEqual(
    findNode(thirdBeforeFirst.root, container.id).children.map((child) => child.id),
    [third.id, first.id, second.id],
  );
});

test("arrangeNode reorders siblings within the same parent", () => {
  const page = defaultPage();
  const container = page.root.children[0];
  const first = container.children[0];
  const second = container.children[1];
  const third = container.children[2];

  const movedDown = arrangeNode(page, first.id, "down");
  assert.deepEqual(
    findNode(movedDown.root, container.id).children.map((child) => child.id),
    [second.id, first.id, third.id],
  );

  const sentBottom = arrangeNode(page, first.id, "bottom");
  assert.deepEqual(
    findNode(sentBottom.root, container.id).children.map((child) => child.id),
    [second.id, third.id, first.id],
  );

  const sentTop = arrangeNode(sentBottom, first.id, "top");
  assert.deepEqual(
    findNode(sentTop.root, container.id).children.map((child) => child.id),
    [first.id, second.id, third.id],
  );
});

test("duplicateNode and cloneNode never duplicate IDs", () => {
  const page = defaultPage();
  const container = page.root.children[0];
  const cloned = cloneNode(container);
  assert.notEqual(cloned.id, container.id);
  assert.notDeepEqual(collectIds(cloned), collectIds(container));
  const duplicated = duplicateNode(page, container.id).page;
  const ids = collectIds(duplicated.root);
  assert.equal(new Set(ids).size, ids.length);
});

test("responsive value resolution falls back predictably", () => {
  const value = { desktop: "48px", tablet: "40px" };
  assert.equal(resolveResponsiveValue(value, "desktop"), "48px");
  assert.equal(resolveResponsiveValue(value, "tablet"), "40px");
  assert.equal(resolveResponsiveValue(value, "mobile"), "40px");
});

test("page validation catches duplicate IDs", () => {
  const page = defaultPage();
  page.root.children[0].id = page.root.id;
  assert.equal(validatePage(page).valid, false);
});

test("history-style undo restores add, delete, and move snapshots", () => {
  const page = defaultPage();
  const past = [];
  const text = makeNode("text");
  past.push(page);
  const added = insertNode(page, page.root.id, text);
  assert.equal(findNode(added.root, text.id).id, text.id);
  const undoAdd = past.pop();
  assert.equal(findNode(undoAdd.root, text.id), null);

  const container = page.root.children[0];
  const heading = container.children[0];
  past.push(page);
  const deleted = removeNode(page, heading.id).page;
  assert.equal(findNode(deleted.root, heading.id), null);
  assert.equal(findNode(past.pop().root, heading.id).id, heading.id);

  const nested = makeNode("container");
  const withNested = insertNode(page, container.id, nested);
  past.push(withNested);
  const moved = moveNode(withNested, heading.id, nested.id);
  assert.equal(findParent(moved.root, heading.id).id, nested.id);
  assert.equal(findParent(past.pop().root, heading.id).id, container.id);
});

test("copy/paste-style clone keeps content but regenerates subtree IDs", () => {
  const page = defaultPage();
  const source = page.root.children[0];
  const pasted = cloneNode(source);
  const next = insertNode(page, page.root.id, pasted);
  assert.equal(findNode(next.root, pasted.id).type, source.type);
  assert.equal(new Set(collectIds(next.root)).size, collectIds(next.root).length);
});
