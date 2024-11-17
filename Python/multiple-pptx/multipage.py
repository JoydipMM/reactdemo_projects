from weasyprint import HTML
from jinja2 import Environment, FileSystemLoader
from PyPDF2 import PdfMerger
import os
from flask import Flask, make_response, render_template
import matplotlib.pyplot as plt
import numpy as np

# Set up Jinja2 environment
template_dir = "templates"
env = Environment(loader=FileSystemLoader(template_dir))


# Generate the plot
plt.plot([1, 2, 3, 4], [1, 4, 9, 16])
plt.xlabel('x-axis')
plt.ylabel('y-axis')
plt.title('Sample Plot')

# Save the plot as a PNG file in the static folder
plot_filename = "plot1.png"
plt.savefig(f"static/{plot_filename}")
plt.close()


# --------------------- page 06 graph start -------------------------
fig, ax = plt.subplots(figsize=(11.78125, 6.796875))  # Width of 12 inches and height of 6 inches
x = np.array(["Texto barra 1", "Texto barra 2", "Texto barra 3", "Texto barra 4", "Texto barra 5", "Texto barra 6", "Texto barra 7", "Texto barra 8", "Texto barra 9"])
y = np.array([2, 4, 7, 10, 14, 17, 21, 25, 26])
# Set the width of the bars
bar_width = 0.52  # You can change this value

# Create a bar chart
bars = plt.bar(x,y, width=bar_width, color='#D4C7F3')

# Rotate x-axis labels
plt.xticks(rotation=45)  # Rotate labels 45 degrees

# Get the current axes
ax = plt.gca()

# Calculate total for percentage calculation
total = sum(y)

# Adding value and percentage below each bar
for bar in bars:
    height = bar.get_height()
    # Add the absolute value below the bar
    # plt.text(bar.get_x() + bar.get_width() / 2, 0, str(height), ha='center', va='top')  # Center the text below the bar
    # Add the percentage below the bar
    percentage = (height / total) * 100
    plt.text(bar.get_x() + bar.get_width() / 2, 1.5, f'{percentage:.1f}%', ha='center', va='top', fontsize=12, fontweight=600, color='#5F6488')  # Adjust the vertical position

# Remove the spines (borders)
for spine in ax.spines.values():
    spine.set_visible(False)

# Remove ticks
# plt.xticks([])
plt.yticks([])

# Use tight_layout to remove excess whitespace
plt.tight_layout()

# Adjust the margins manually (0 for no padding)
plt.margins(x=0.0, y=0.0)

# Add labels and title
# plt.xlabel('Categories')
# plt.ylabel('Values')
# plt.title('Bar Chart with Customized Width and Heights')
plot_filename2 = "tamplate06-graph.png"
plt.savefig(f"static/{plot_filename2}", transparent=True)
plt.close()
# --------------------- page 06 graph ended -------------------------


# --------------------- page 09 graph start -------------------------
# Data
sizes = [30, 40, 30]  # Percentages for each section
labels = ['Category 1', 'Category 2', 'Category 3']
colors = ['#F36D64', '#FEC84B', '#41CE8C']  # Colors for each section

# Create the donut chart
plt.figure(figsize=(6, 6))
# plt.pie(sizes, labels=labels, colors=colors, autopct='%1.1f%%', startangle=90, wedgeprops={'width': 0.3})
plt.pie(sizes, colors=colors, startangle=90, wedgeprops={'width': 0.9})

# Use tight_layout to remove excess whitespace
plt.tight_layout()

# Adjust the margins manually (0 for no padding)
plt.margins(x=0.0, y=0.0)

# Draw the circle in the center to make it a donut
centre_circle = plt.Circle((0, 0), 0.5, fc='white')
plt.gca().add_artist(centre_circle)

# Equal aspect ratio ensures the pie chart is drawn as a circle
plt.axis('equal')  

# Title
# plt.title("Donut Chart with 3 Colors")

plot_pag_09 = "tamplate09-graph.png"
plt.savefig(f"static/{plot_pag_09}", transparent=True)
plt.close()
# --------------------- page 09 graph ended -------------------------



# Dynamic data for each page
dynamic_data = [
    {"title": "Informe de resultados", "content": "Encuesta de clima laboral 2023", "image_path": "static/images/logo-big.svg"},
    {"title": "Índice", "content": "", "image_path": ""},
    {"title": "Welcome to Page 3", "content": "This is the content of the third page.", "image_path": "static/plot3.png"},
    {"title": "Welcome to Page 4", "content": "This is the content of the third page.", "image_path": "static/plot3.png"},
    {"title": "Welcome to Page 5", "content": "This is the content of the third page.", "image_path": "static/plot3.png"},
    {"title": "Welcome to Page 6", "content": "This is the content of the third page.", "image_path": "static/tamplate06-graph.png"},
    {"title": "Welcome to Page 7", "content": "This is the content of the third page.", "image_path": "static/plot3.png"},
    {"title": "Welcome to Page 8", "content": "This is the content of the third page.", "image_path": "static/plot3.png"},
    {"title": "Welcome to Page 9", "content": "This is the content of the third page.", "image_path": "static/tamplate09-graph.png"},
    {"title": "Welcome to Page 10", "content": "This is the content of the third page.", "image_path": "static/plot3.png"},
    {"title": "Welcome to Page 11", "content": "This is the content of the third page.", "image_path": "static/plot3.png"},
    {"title": "Welcome to Page 12", "content": "This is the content of the third page.", "image_path": "static/plot3.png"},
    {"title": "Welcome to Page 13", "content": "This is the content of the third page.", "image_path": "static/plot3.png"},
    {"title": "Welcome to Page 14", "content": "This is the content of the third page.", "image_path": "static/plot3.png"},
    {"title": "Welcome to Page 15", "content": "This is the content of the third page.", "image_path": "static/plot3.png"},
    {"title": "Welcome to Page 16", "content": "This is the content of the third page.", "image_path": "static/plot3.png"},
    {"title": "Welcome to Page 17", "content": "This is the content of the third page.", "image_path": "static/plot3.png"},
    {"title": "Welcome to Page 18", "content": "This is the content of the third page.", "image_path": "static/plot3.png"},
    {"title": "Welcome to Page 19", "content": "This is the content of the third page.", "image_path": "static/plot3.png"},
    {"title": "Welcome to Page 20", "content": "This is the content of the third page.", "image_path": "static/plot3.png"},
    {"title": "Welcome to Page 21", "content": "This is the content of the third page.", "image_path": "static/plot3.png"},
    {"title": "Welcome to Page 22", "content": "This is the content of the third page.", "image_path": "static/plot3.png"},
]

# Templates list
templates = [
    "intro.html", 
    "template2.html", 
    "template3.html",
    "template4.html",
    "template5.html",
    "template6.html",
    "template7.html",
    "template8.html",
    "template9.html",
    "template10.html",
    "template11.html",
    "template12.html",
    "template13.html",
    "template14.html",
    "template15.html",
    "template16.html",
    "template17.html",
    "template18.html",
    "template19.html",
    "template20.html",
    "template21.html",
    "template22.html",
    ]

# Page dimensions in inches (1920px by 1080px at 96 DPI)
# page_style = """
# @page {
#     size: 20in 11.25in;  /* 1920x1080 pixels in inches at 96 DPI */
#     margin: 0;           /* Optional: remove margins for full-bleed */
# }
# """

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
#     return render_template('template2.html')



# if __name__ == '__main__':
#     app.run(debug=True)