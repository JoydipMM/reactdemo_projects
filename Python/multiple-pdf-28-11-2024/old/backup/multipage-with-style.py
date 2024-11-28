from weasyprint import HTML
from jinja2 import Environment, FileSystemLoader
from PyPDF2 import PdfMerger
import os
from flask import Flask, make_response, render_template

# Set up Jinja2 environment
template_dir = "templates"
env = Environment(loader=FileSystemLoader(template_dir))

# Dynamic data for each page
dynamic_data = [
    {"title": "Welcome to Page 1", "content": "This is the content of the first page.", "image_path": "static/plot1.png"},
    {"title": "Welcome to Page 2", "content": "This is the content of the second page.", "image_path": "static/plot2.png"},
    {"title": "Welcome to Page 3", "content": "This is the content of the third page.", "image_path": "static/plot3.png"},
]

# Templates list
templates = ["template.html", "template2.html", "template3.html"]

# Page dimensions in inches (1920px by 1080px at 96 DPI)
page_style = """
@page {
    size: 20in 11.25in;  /* 1920x1080 pixels in inches at 96 DPI */
    margin: 0;           /* Optional: remove margins for full-bleed */
}
"""

# Track generated PDF pages
pdf_pages = []

for i, template_name in enumerate(templates):
    # Load and render the template with dynamic content
    template = env.get_template(template_name)
    rendered_html = template.render(
        title=dynamic_data[i]['title'],
        content=dynamic_data[i]['content'],
        image_path=dynamic_data[i]['image_path']
    )

    # Add page-specific style
    # full_html = f"<style>{page_style}</style>{rendered_html}"

    # Define individual PDF page path
    pdf_page_path = f"page_{i + 1}.pdf"
    pdf_pages.append(pdf_page_path)

    # Generate PDF with the custom page size
    # HTML(string=full_html, base_url='.').write_pdf(pdf_page_path)
    HTML(string=rendered_html, base_url='.').write_pdf(pdf_page_path)

# Combine individual PDFs into a single PDF
output_pdf_path = "combined_multi_page_output.pdf"
merger = PdfMerger()

for pdf_page in pdf_pages:
    merger.append(pdf_page)

merger.write(output_pdf_path)
merger.close()

print(f"Combined PDF generated successfully at {output_pdf_path}!")

# Optional cleanup of individual page PDFs
for pdf_page in pdf_pages:
    os.remove(pdf_page)



# app = Flask(__name__)
# @app.route('/')
# def graph():
#     return render_template('template.html')



# if __name__ == '__main__':
#     app.run(debug=True)