import pyvis
from pyvis.network import Network
pyvis.__version__
from dijkstra import dijkstra, cart
from pathlib import Path

#add start and end node
start_node = "a"
end_node = "d"

#seperate node characteristics as list
node_id = list(cart.keys())
num_nodes = len(node_id)
size = [10 for _ in range(num_nodes)]
titles = ["Safe House" for i in range(num_nodes)]
x_values = []
y_values = []
coords = list(cart.values())
for i in range(num_nodes):
    x_values.append(coords[i][0])
    y_values.append(coords[i][1])
colors = ["#1A49C9" for i in range(num_nodes)]
colors[node_id.index(start_node)] = '#00ff1e'
colors[node_id.index(end_node)] = '#dd4b39'


net = Network(notebook = True, cdn_resources = "remote",
    bgcolor = "#00000000",
    font_color = "black",
    height = "750px",
    width = "100%",
)

net.add_nodes(node_id, value=size,
    title=titles,
    x=x_values,
    y=y_values,
    label=node_id,
    color=colors, 
)

for node in net.nodes:
    node['fixed'] = True
    
path = dijkstra(start_node, end_node)

for i in range(len(path)-1):
    net.add_edge(path[i],path[i+1],color="black")

net.show("NerdSquad\\backend\\path.html")

#adding background image
with open("NerdSquad\\backend\\path.html", "r", encoding="utf-8") as f:
    html = f.read()
    
html = html.replace(
    "<body>",
    '<body style="background-image: url(\'NerdSquad//backend//United_States.png\'); '
    'background-size: cover; background-repeat: no-repeat;">'
)

with open("NerdSquad\\backend\\path.html", "w", encoding="utf-8") as f:
    f.write(html)