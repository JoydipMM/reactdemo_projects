import React from 'react';
import {useMenuContext} from '../Context/TutorialContext';
import DOMPurify from 'dompurify';

const TutorialCodePreview = () => {

    const {tutorialLink, menuInfoData } = useMenuContext()
    const safeHTML = DOMPurify.sanitize(menuInfoData);
  return (
    <>
    <div>
      {tutorialLink}
    </div>
    {/* <div dangerouslySetInnerHTML={{ __html: safeHTML }}></div> */}
    <div>
        <pre>{menuInfoData}</pre>
    </div>
    </>
  )
}

export default TutorialCodePreview
