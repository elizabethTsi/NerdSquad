import pyvis
from pyvis.network import Network
pyvis.__version__
from dijkstra import dijkstra, cart

start_node = "a"
end_note = "d"


net = Network(notebook = True, cdn_resources = "remote",
    bgcolor = "#094804",
    font_color = "white",
    height = "750px",
    width = "100%",
)

node_id = []
size = []
title = []
x = []
y = []
label = []


net.add_nodes([1,2,3], value=[10, 10, 10],
    title=['I am node 1', 'node 2 here', 'and im node 3'],
    x=[21.4, 54.2, 11.2],
    y=[100.2, 23.54, 32.1],
    label=['NODE 1', 'NODE 2', 'NODE 3'],
    color=['#00ff1e', '#162347', '#dd4b39'], 
)

for node in net.nodes:
    node['fixed'] = True

# net.show("graph.html")