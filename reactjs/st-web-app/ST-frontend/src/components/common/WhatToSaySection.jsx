export default function WhatToSaySection({className, title, description, children}){
    return(
        <>
        <section className={`common_page_indvdl_section what_to_say_section ${className ? className : ""}`}>
            <div className="what_to_say_inner_section">
                <div className="container">
                    <div className="what_to_say_row">
                        <div className="what_to_say_col">
                            <div className="section_common_heading_section left_align mb-0 invert_color">
                                {title && <h2 className="section_heading_text">{title}</h2> }
                                {description && <p>{description}</p> }
                            </div>
                        </div>
                        <div className="what_to_say_slider_col">
                            {children}
                        </div>
                    </div>
                </div>
                <div className="what_to_say_bg_curve"></div>
            </div>
        </section>
        </>
    )
}