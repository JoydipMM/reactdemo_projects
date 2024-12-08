from weasyprint import HTML
from jinja2 import Environment, FileSystemLoader
from PyPDF2 import PdfMerger
import os
from flask import Flask, make_response, render_template
import matplotlib.pyplot as plt
import numpy as np

# import fitz  # PyMuPDF
# from pptx import Presentation
# from pptx.util import Inches
# from PIL import Image

# Set up Jinja2 environment
template_dir = "templates/Informe_Ejecutivo"
env = Environment(loader=FileSystemLoader(template_dir))


# --------------------- page 04 graph start -------------------------

# graph 01 ------------------------
sizes = [30, 30, 20, 30, 30]  # Percentages for each section
labels = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']
colors = ['#FEC84B','#5DA8EE', '#41CE8C', '#06FF8A', '#F36D64']  # Colors for each section

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

plot_pag_04_01 = "tamplate04-01-graph.png"
plt.savefig(f"static/Informe_Ejecutivo/graphs/{plot_pag_04_01}", transparent=True)
plt.close()

# graph 02 ------------------------
sizes = [30, 30, 20, 30, 30]  # Percentages for each section
labels = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']
colors = ['#FEC84B','#5DA8EE', '#41CE8C', '#06FF8A', '#F36D64']  # Colors for each section

# Create the donut chart
plt.figure(figsize=(6, 6))
# plt.pie(sizes, labels=labels, colors=colors, autopct='%1.1f%%', startangle=90, wedgeprops={'width': 0.3})
plt.pie(sizes, colors=colors, startangle=410, wedgeprops={'width': 0.9})

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

plot_pag_04_02 = "tamplate04-02-graph.png"
plt.savefig(f"static/Informe_Ejecutivo/graphs/{plot_pag_04_02}", transparent=True)
plt.close()
# --------------------- page 04 graph ended -------------------------

# --------------------- page 05 graph start -------------------------

# graph 01 ------------------------
sizes = [30, 30, 20, 30, 30]  # Percentages for each section
labels = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']
colors = ['#FEC84B','#5DA8EE', '#41CE8C', '#06FF8A', '#F36D64']  # Colors for each section

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

plot_pag_05_01 = "tamplate05-01-graph.png"
plt.savefig(f"static/Informe_Ejecutivo/graphs/{plot_pag_05_01}", transparent=True)
plt.close()

# graph 02 ------------------------
sizes = [30, 30, 20, 30, 30]  # Percentages for each section
labels = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']
colors = ['#FEC84B','#5DA8EE', '#41CE8C', '#06FF8A', '#F36D64']  # Colors for each section

# Create the donut chart
plt.figure(figsize=(6, 6))
# plt.pie(sizes, labels=labels, colors=colors, autopct='%1.1f%%', startangle=90, wedgeprops={'width': 0.3})
plt.pie(sizes, colors=colors, startangle=410, wedgeprops={'width': 0.9})

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

plot_pag_05_02 = "tamplate05-02-graph.png"
plt.savefig(f"static/Informe_Ejecutivo/graphs/{plot_pag_05_02}", transparent=True)
plt.close()
# --------------------- page 05 graph ended -------------------------

# --------------------- page 08 graph start -------------------------
fig, ax = plt.subplots(figsize=(18, 7.5))  # Width of 12 inches and height of 6 inches
# Data for the bar chart
x = ["DIR_PORT-MACC 1", "DIR_PORT-MACC 2", "DIR_PORT-MACC 3", "DIR_PORT-MACC 4", 
    "DIR_PORT-MACC 5", "DIR_PORT-MACC 6", "DIR_PORT-MACC 7", "DIR_PORT-MACC 8", 
    "DIR_PORT-MACC 9", "DIR_PORT-MACC 10", "DIR_PORT-MACC 11", "DIR_PORT-MACC 12", 
    "DIR_PORT-MACC 13"]  # Categories on the x-axis
y = [2, 4, 7, 10, 14, 17, 21, 25, 26, 30, 35, 40, 45]  # Values corresponding to the categories

# Add gridlines for better readability
plt.grid(axis='y', linestyle='-', alpha=0.7)

# Get the current axes
ax = plt.gca()

# Define the step size for y-axis ticks
step = 5  # Step size for gridlines
y_max = max(y) + 5  # Set the maximum value slightly above the highest bar
y_ticks = np.arange(0, y_max + step, step)  # Generate ticks at regular intervals

# Create the bar chart
plt.yticks(y_ticks)  # Set custom ticks on the y-axis
plt.bar(x, y, color='#36BFFA', width=0.6, zorder=3)

# Add a title and axis labels
# plt.title("Sample Bar Chart", fontsize=16)  # Chart title
# plt.xlabel("Categories", fontsize=12)  # X-axis label
# plt.ylabel("Values", fontsize=12)  # Y-axis label

# Add data labels on top of each bar
for i, value in enumerate(y):
    plt.text(i, value + 0.5, str(value), ha='center', color='#5F6488', va='bottom', fontsize=10)

# Rotate x-axis labels
plt.xticks( fontsize=9, color='#5F6488', rotation=55,  ha='right',  fontname='Arial' )

# Remove the spines (borders)
for spine in ax.spines.values():
    spine.set_visible(False)

# Show the plot
plt.tight_layout()  # Automatically adjust the layout to fit elements

# Save the plot
plot_pag_08_01 = "tamplate08-01-graph.png"
plt.savefig(f"static/Informe_Ejecutivo/graphs/{plot_pag_08_01}", transparent=True)
plt.close()
# --------------------- page 08 graph ended -------------------------


# --------------------- page 09 graph start -------------------------

# total group bar ---------------------------------
# Data for the grouped bar chart
categories = ['Mujer', 'Hombre']
bar1_values = [433, 333]  # Values for the first set of bars (Set 1)
bar2_values = [125.58, 85.45]  # Values for the second set of bars (Set 2)

# Number of categories (bars) in each group
bar_width = 0.38  # Width of each bar
gap = 0.02  # Reduced gap between the groups (smaller gap)
index = np.arange(len(categories))  # Positions for the groups on the x-axis

# Set figure size (width, height) in inches
fig, ax = plt.subplots(figsize=(3, 5))  # Width = 8 inches, Height = 5 inches

# Create the bars
plt.bar(index - bar_width / 2 - gap / 2, bar1_values, bar_width, label='Set 1', color='#6172F3')
plt.bar(index + bar_width / 2 + gap / 2, bar2_values, bar_width, label='Set 2', color='#36BFFA')

# Add labels on top of each bar
for i, value in enumerate(bar1_values):
    # Label for the first set of bars
    plt.text(index[i] - bar_width / 2 - gap / 2, value + 0.5, str(value), ha='center', va='bottom', fontsize=10, color='#5F6488', fontweight='500')

for i, value in enumerate(bar2_values):
    # Label for the second set of bars
    plt.text(index[i] + bar_width / 2 + gap / 2, value + 0.5, str(value), ha='center', va='bottom', fontsize=10, color='#5F6488')

# Customize x-ticks and show the x-tick labels centered for each group
plt.xticks(index, categories, ha='center', va='top', fontsize=10, fontweight='700', color='#5F6488')

# Add title and labels
# plt.title('Grouped Bar Chart with Labels', fontsize=14)
# plt.ylabel('Values', fontsize=12)

# Remove spines (borders) for a cleaner look
for spine in ax.spines.values():
    spine.set_visible(False)

# Remove ticks from y-axis
plt.yticks([])

# Adjust layout to make it look tight
plt.tight_layout()

# Display the legend
# plt.legend()

# Save the plot
plot_pag_09_total = "tamplate09-total-graph.png"
plt.savefig(f"static/Informe_Ejecutivo/graphs/{plot_pag_09_total}", transparent=True)
plt.close()

# Technical group bar ---------------------------------
# Data for the grouped bar chart
categories = ['Mujer', 'Hombre']
bar1_values = [433, 333]  # Values for the first set of bars (Set 1)
bar2_values = [125.58, 85.45]  # Values for the second set of bars (Set 2)

# Number of categories (bars) in each group
bar_width = 0.38  # Width of each bar
gap = 0.02  # Reduced gap between the groups (smaller gap)
index = np.arange(len(categories))  # Positions for the groups on the x-axis

# Set figure size (width, height) in inches
fig, ax = plt.subplots(figsize=(3, 5))  # Width = 8 inches, Height = 5 inches

# Create the bars
plt.bar(index - bar_width / 2 - gap / 2, bar1_values, bar_width, label='Set 1', color='#6172F3')
plt.bar(index + bar_width / 2 + gap / 2, bar2_values, bar_width, label='Set 2', color='#36BFFA')

# Add labels on top of each bar
for i, value in enumerate(bar1_values):
    # Label for the first set of bars
    plt.text(index[i] - bar_width / 2 - gap / 2, value + 0.5, str(value), ha='center', va='bottom', fontsize=10, color='#5F6488', fontweight='500')

for i, value in enumerate(bar2_values):
    # Label for the second set of bars
    plt.text(index[i] + bar_width / 2 + gap / 2, value + 0.5, str(value), ha='center', va='bottom', fontsize=10, color='#5F6488')

# Customize x-ticks and show the x-tick labels centered for each group
plt.xticks(index, categories, ha='center', va='top', fontsize=10, fontweight='700', color='#5F6488')

# Add title and labels
# plt.title('Grouped Bar Chart with Labels', fontsize=14)
# plt.ylabel('Values', fontsize=12)

# Remove spines (borders) for a cleaner look
for spine in ax.spines.values():
    spine.set_visible(False)

# Remove ticks from y-axis
plt.yticks([])

# Adjust layout to make it look tight
plt.tight_layout()

# Display the legend
# plt.legend()

# Save the plot
plot_pag_09_technical = "tamplate09-technical-graph.png"
plt.savefig(f"static/Informe_Ejecutivo/graphs/{plot_pag_09_technical}", transparent=True)
plt.close()

# directores group bar ---------------------------------
# Data for the grouped bar chart
categories = ['Mujer', 'Hombre']
bar1_values = [433, 333]  # Values for the first set of bars (Set 1)
bar2_values = [125.58, 85.45]  # Values for the second set of bars (Set 2)

# Number of categories (bars) in each group
bar_width = 0.38  # Width of each bar
gap = 0.02  # Reduced gap between the groups (smaller gap)
index = np.arange(len(categories))  # Positions for the groups on the x-axis

# Set figure size (width, height) in inches
fig, ax = plt.subplots(figsize=(3, 5))  # Width = 8 inches, Height = 5 inches

# Create the bars
plt.bar(index - bar_width / 2 - gap / 2, bar1_values, bar_width, label='Set 1', color='#6172F3')
plt.bar(index + bar_width / 2 + gap / 2, bar2_values, bar_width, label='Set 2', color='#36BFFA')

# Add labels on top of each bar
for i, value in enumerate(bar1_values):
    # Label for the first set of bars
    plt.text(index[i] - bar_width / 2 - gap / 2, value + 0.5, str(value), ha='center', va='bottom', fontsize=10, color='#5F6488', fontweight='500')

for i, value in enumerate(bar2_values):
    # Label for the second set of bars
    plt.text(index[i] + bar_width / 2 + gap / 2, value + 0.5, str(value), ha='center', va='bottom', fontsize=10, color='#5F6488')

# Customize x-ticks and show the x-tick labels centered for each group
plt.xticks(index, categories, ha='center', va='top', fontsize=10, fontweight='700', color='#5F6488')

# Add title and labels
# plt.title('Grouped Bar Chart with Labels', fontsize=14)
# plt.ylabel('Values', fontsize=12)

# Remove spines (borders) for a cleaner look
for spine in ax.spines.values():
    spine.set_visible(False)

# Remove ticks from y-axis
plt.yticks([])

# Adjust layout to make it look tight
plt.tight_layout()

# Display the legend
# plt.legend()

# Save the plot
plot_pag_09_directores = "tamplate09-directores-graph.png"
plt.savefig(f"static/Informe_Ejecutivo/graphs/{plot_pag_09_directores}", transparent=True)
plt.close()

# responsables group bar ---------------------------------
# Data for the grouped bar chart
categories = ['Mujer', 'Hombre']
bar1_values = [433, 333]  # Values for the first set of bars (Set 1)
bar2_values = [125.58, 85.45]  # Values for the second set of bars (Set 2)

# Number of categories (bars) in each group
bar_width = 0.38  # Width of each bar
gap = 0.02  # Reduced gap between the groups (smaller gap)
index = np.arange(len(categories))  # Positions for the groups on the x-axis

# Set figure size (width, height) in inches
fig, ax = plt.subplots(figsize=(3, 5))  # Width = 8 inches, Height = 5 inches

# Create the bars
plt.bar(index - bar_width / 2 - gap / 2, bar1_values, bar_width, label='Set 1', color='#6172F3')
plt.bar(index + bar_width / 2 + gap / 2, bar2_values, bar_width, label='Set 2', color='#36BFFA')

# Add labels on top of each bar
for i, value in enumerate(bar1_values):
    # Label for the first set of bars
    plt.text(index[i] - bar_width / 2 - gap / 2, value + 0.5, str(value), ha='center', va='bottom', fontsize=10, color='#5F6488', fontweight='500')

for i, value in enumerate(bar2_values):
    # Label for the second set of bars
    plt.text(index[i] + bar_width / 2 + gap / 2, value + 0.5, str(value), ha='center', va='bottom', fontsize=10, color='#5F6488')

# Customize x-ticks and show the x-tick labels centered for each group
plt.xticks(index, categories, ha='center', va='top', fontsize=10, fontweight='700', color='#5F6488')

# Add title and labels
# plt.title('Grouped Bar Chart with Labels', fontsize=14)
# plt.ylabel('Values', fontsize=12)

# Remove spines (borders) for a cleaner look
for spine in ax.spines.values():
    spine.set_visible(False)

# Remove ticks from y-axis
plt.yticks([])

# Adjust layout to make it look tight
plt.tight_layout()

# Display the legend
# plt.legend()

# Save the plot
plot_pag_09_responsables = "tamplate09-responsables-graph.png"
plt.savefig(f"static/Informe_Ejecutivo/graphs/{plot_pag_09_responsables}", transparent=True)
plt.close()
# --------------------- page 09 graph ended -------------------------

# --------------------- page 10 graph start -------------------------

# media global graph --------------------
categories = ['Group 1', 'Group 2', 'Group 3', 'Group 4', 'Group 5']
bar1_values = [433, 333, 200, 150, 300]  # Values for the first set of bars (Set 1)
bar2_values = [125.58, 85.45, 250, 200, 150]  # Values for the second set of bars (Set 2)

# Number of categories (bars) in each group
bar_width = 0.28  # Width of each bar
gap = 0.1  # Reduced gap between the groups (smaller gap)
index = np.arange(len(categories))  # Positions for the groups on the x-axis

# Set figure size (width, height) in inches
fig, ax = plt.subplots(figsize=(8, 3))  # Width = 8 inches, Height = 5 inches

# Create the bars
plt.bar(index - bar_width / 2 - gap / 2, bar1_values, bar_width, label='Set 1', color='#6172F3', zorder=3)
plt.bar(index + bar_width / 2 + gap / 2, bar2_values, bar_width, label='Set 2', color='#36BFFA', zorder=3)

# Add labels on top of each bar
for i, value in enumerate(bar1_values):
    # Label for the first set of bars
    plt.text(index[i] - bar_width / 2 - gap / 2, value + 0.5, str(value), ha='center', va='bottom', fontsize=10, color='#5F6488', fontweight='500')

for i, value in enumerate(bar2_values):
    # Label for the second set of bars
    plt.text(index[i] + bar_width / 2 + gap / 2, value + 0.5, str(value), ha='center', va='bottom', fontsize=10, color='#5F6488')

# Customize x-ticks and show the x-tick labels centered for each group
plt.xticks(index, categories, ha='center', va='top', fontsize=10, fontweight='400', color='#5F6488')

# Add title and labels
# plt.title('Grouped Bar Chart with 5 Labels', fontsize=14)
# plt.ylabel('Values', fontsize=12)

# Add gridlines for better readability
plt.grid(axis='y', linestyle='-', alpha=0.7)

# Remove spines (borders) for a cleaner look
for spine in ax.spines.values():
    spine.set_visible(False)

# Remove ticks from y-axis
# plt.yticks([])

# Adjust layout to make it look tight
plt.tight_layout()

# Display the legend
# plt.legend()

# Save the plot
plot_pag_10_mediaglobal = "tamplate10-mediaglobal-graph.png"
plt.savefig(f"static/Informe_Ejecutivo/graphs/{plot_pag_10_mediaglobal}", transparent=True)
plt.close()

# Directores graph --------------------
categories = ['Group 1', 'Group 2', 'Group 3', 'Group 4', 'Group 5']
bar1_values = [433, 333, 200, 150, 300]  # Values for the first set of bars (Set 1)
bar2_values = [125.58, 85.45, 250, 200, 150]  # Values for the second set of bars (Set 2)

# Number of categories (bars) in each group
bar_width = 0.28  # Width of each bar
gap = 0.1  # Reduced gap between the groups (smaller gap)
index = np.arange(len(categories))  # Positions for the groups on the x-axis

# Set figure size (width, height) in inches
fig, ax = plt.subplots(figsize=(8, 3))  # Width = 8 inches, Height = 5 inches

# Create the bars
plt.bar(index - bar_width / 2 - gap / 2, bar1_values, bar_width, label='Set 1', color='#6172F3', zorder=3)
plt.bar(index + bar_width / 2 + gap / 2, bar2_values, bar_width, label='Set 2', color='#36BFFA', zorder=3)

# Add labels on top of each bar
for i, value in enumerate(bar1_values):
    # Label for the first set of bars
    plt.text(index[i] - bar_width / 2 - gap / 2, value + 0.5, str(value), ha='center', va='bottom', fontsize=10, color='#5F6488', fontweight='500')

for i, value in enumerate(bar2_values):
    # Label for the second set of bars
    plt.text(index[i] + bar_width / 2 + gap / 2, value + 0.5, str(value), ha='center', va='bottom', fontsize=10, color='#5F6488')

# Customize x-ticks and show the x-tick labels centered for each group
plt.xticks(index, categories, ha='center', va='top', fontsize=10, fontweight='400', color='#5F6488')

# Add title and labels
# plt.title('Grouped Bar Chart with 5 Labels', fontsize=14)
# plt.ylabel('Values', fontsize=12)

# Add gridlines for better readability
plt.grid(axis='y', linestyle='-', alpha=0.7)

# Remove spines (borders) for a cleaner look
for spine in ax.spines.values():
    spine.set_visible(False)

# Remove ticks from y-axis
# plt.yticks([])

# Adjust layout to make it look tight
plt.tight_layout()

# Display the legend
# plt.legend()

# Save the plot
plot_pag_10_directores = "tamplate10-directores-graph.png"
plt.savefig(f"static/Informe_Ejecutivo/graphs/{plot_pag_10_directores}", transparent=True)
plt.close()

# Responsables graph --------------------
categories = ['Group 1', 'Group 2', 'Group 3', 'Group 4', 'Group 5']
bar1_values = [433, 333, 200, 150, 300]  # Values for the first set of bars (Set 1)
bar2_values = [125.58, 85.45, 250, 200, 150]  # Values for the second set of bars (Set 2)

# Number of categories (bars) in each group
bar_width = 0.28  # Width of each bar
gap = 0.1  # Reduced gap between the groups (smaller gap)
index = np.arange(len(categories))  # Positions for the groups on the x-axis

# Set figure size (width, height) in inches
fig, ax = plt.subplots(figsize=(8, 3))  # Width = 8 inches, Height = 5 inches

# Create the bars
plt.bar(index - bar_width / 2 - gap / 2, bar1_values, bar_width, label='Set 1', color='#6172F3', zorder=3)
plt.bar(index + bar_width / 2 + gap / 2, bar2_values, bar_width, label='Set 2', color='#36BFFA', zorder=3)

# Add labels on top of each bar
for i, value in enumerate(bar1_values):
    # Label for the first set of bars
    plt.text(index[i] - bar_width / 2 - gap / 2, value + 0.5, str(value), ha='center', va='bottom', fontsize=10, color='#5F6488', fontweight='500')

for i, value in enumerate(bar2_values):
    # Label for the second set of bars
    plt.text(index[i] + bar_width / 2 + gap / 2, value + 0.5, str(value), ha='center', va='bottom', fontsize=10, color='#5F6488')

# Customize x-ticks and show the x-tick labels centered for each group
plt.xticks(index, categories, ha='center', va='top', fontsize=10, fontweight='400', color='#5F6488')

# Add title and labels
# plt.title('Grouped Bar Chart with 5 Labels', fontsize=14)
# plt.ylabel('Values', fontsize=12)

# Add gridlines for better readability
plt.grid(axis='y', linestyle='-', alpha=0.7)

# Remove spines (borders) for a cleaner look
for spine in ax.spines.values():
    spine.set_visible(False)

# Remove ticks from y-axis
# plt.yticks([])

# Adjust layout to make it look tight
plt.tight_layout()

# Display the legend
# plt.legend()

# Save the plot
plot_pag_10_responsables = "tamplate10-responsables-graph.png"
plt.savefig(f"static/Informe_Ejecutivo/graphs/{plot_pag_10_responsables}", transparent=True)
plt.close()

# Especialistas graph --------------------
categories = ['Group 1', 'Group 2', 'Group 3', 'Group 4', 'Group 5']
bar1_values = [433, 333, 200, 150, 300]  # Values for the first set of bars (Set 1)
bar2_values = [125.58, 85.45, 250, 200, 150]  # Values for the second set of bars (Set 2)

# Number of categories (bars) in each group
bar_width = 0.28  # Width of each bar
gap = 0.1  # Reduced gap between the groups (smaller gap)
index = np.arange(len(categories))  # Positions for the groups on the x-axis

# Set figure size (width, height) in inches
fig, ax = plt.subplots(figsize=(8, 3))  # Width = 8 inches, Height = 5 inches

# Create the bars
plt.bar(index - bar_width / 2 - gap / 2, bar1_values, bar_width, label='Set 1', color='#6172F3', zorder=3)
plt.bar(index + bar_width / 2 + gap / 2, bar2_values, bar_width, label='Set 2', color='#36BFFA', zorder=3)

# Add labels on top of each bar
for i, value in enumerate(bar1_values):
    # Label for the first set of bars
    plt.text(index[i] - bar_width / 2 - gap / 2, value + 0.5, str(value), ha='center', va='bottom', fontsize=10, color='#5F6488', fontweight='500')

for i, value in enumerate(bar2_values):
    # Label for the second set of bars
    plt.text(index[i] + bar_width / 2 + gap / 2, value + 0.5, str(value), ha='center', va='bottom', fontsize=10, color='#5F6488')

# Customize x-ticks and show the x-tick labels centered for each group
plt.xticks(index, categories, ha='center', va='top', fontsize=10, fontweight='400', color='#5F6488')

# Add title and labels
# plt.title('Grouped Bar Chart with 5 Labels', fontsize=14)
# plt.ylabel('Values', fontsize=12)

# Add gridlines for better readability
plt.grid(axis='y', linestyle='-', alpha=0.7)

# Remove spines (borders) for a cleaner look
for spine in ax.spines.values():
    spine.set_visible(False)

# Remove ticks from y-axis
# plt.yticks([])

# Adjust layout to make it look tight
plt.tight_layout()

# Display the legend
# plt.legend()

# Save the plot
plot_pag_10_especialistas = "tamplate10-especialistas-graph.png"
plt.savefig(f"static/Informe_Ejecutivo/graphs/{plot_pag_10_especialistas}", transparent=True)
plt.close()
# --------------------- page 10 graph ended -------------------------



# Dynamic data for each page
dynamic_data = [
    {"title": "Informe ejecutivo", "content": "Proceso de Evaluación 2023", "image_path": "static/Informe_Ejecutivo/images/logo-big.svg"},
    {"title": "Índice", "content": "", "image_path": ""},
    {"title": "Ficha técnica", "content": "", "image_path": ""},
    {"title": "Perfil de la muestra", "content": "", "image_path": ""},
    {"title": "Welcome to Page 5", "content": "This is the content of the third page.", "image_path": "static/Informe_Ejecutivo/graphs/plot3.png"},
    {"title": "Welcome to Page 6", "content": "This is the content of the third page.", "image_path": "static/Informe_Ejecutivo/graphs/tamplate06-graph.png"},
    {"title": "Welcome to Page 7", "content": "This is the content of the third page.", "image_path": "static/Informe_Ejecutivo/graphs/plot3.png"},
    {"title": "Welcome to Page 8", "content": "This is the content of the third page.", "image_path": "static/Informe_Ejecutivo/graphs/plot3.png"},
    {"title": "Welcome to Page 9", "content": "This is the content of the third page.", "image_path": "static/Informe_Ejecutivo/graphs/tamplate09-graph.png"},
    {"title": "Welcome to Page 10", "content": "This is the content of the third page.", "image_path": "static/Informe_Ejecutivo/graphs/plot3.png"},
    {"title": "Welcome to Page 11", "content": "This is the content of the third page.", "image_path": "static/Informe_Ejecutivo/graphs/plot3.png"},
    {"title": "Welcome to Page 12", "content": "This is the content of the third page.", "image_path": "static/Informe_Ejecutivo/graphs/plot3.png"},
    {"title": "Welcome to Page 13", "content": "This is the content of the third page.", "image_path": "static/Informe_Ejecutivo/graphs/plot3.png"},
    {"title": "Welcome to Page 14", "content": "This is the content of the third page.", "image_path": "static/Informe_Ejecutivo/graphs/plot3.png"},
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
output_pdf_path = "Informe_Ejecutivo.pdf"
merger = PdfMerger()

for pdf_page in pdf_pages:
    merger.append(pdf_page)

merger.write(output_pdf_path)
merger.close()

print(f"Combined PDF generated successfully at {output_pdf_path}!")

# Optional cleanup of individual page PDFs
for pdf_page in pdf_pages:
    os.remove(pdf_page)



app = Flask(__name__, template_folder="templates/Informe_Ejecutivo")


# @app.route('/')
# def graph():
#     return render_template('template18.html')

@app.route('/Informe_Ejecutivo')
def render_folder1_template():
    return render_template('template10.html')




if __name__ == '__main__':
    app.run(debug=True)
