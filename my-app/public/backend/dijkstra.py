# implementation of dijkstras algorithm
import math

# representing the network
# SAMPLE --> EXPANDED MORE FOR DEMO
cart = {'a':(0, 0), 
        'b':(100, 100), 
        'c':(200, 300), 
        'd':(200, 600), 
        'e':(0, 500)} # coordinate --> calculating weights as distances
adj = {'a':['b', 'c', 'e'],
       'b':['a'],
       'c':['a', 'd', 'e'],
       'd':['c', 'e'],
       'e':['a', 'c', 'd']} # adjacency dict

num_node_dict = my_dict = {x: y for x, y in dict(enumerate(list(cart.keys()))).items()} # order in network (1-n) : label
node_num_dict = my_dict = {y: x for x, y in dict(enumerate(list(cart.keys()))).items()} # label : order in network (1-n)

# get cartesian distance as weight between nodes
def dist(a_label, b_label):
  a = cart[a_label]
  b = cart[b_label]
  y_square = (a[1] - b[1])**2
  x_square = (a[0] - b[0])**2
  return math.sqrt(y_square + x_square)

def get_path(predecessors, start, end):
        path = []

        # current = self.vertex_data.index(end_vertex)
        current = node_num_dict[end]

        while current is not None:
          path.insert(0, num_node_dict[current])
          current = node_num_dict[predecessors[current]]

          if current == node_num_dict[start]:
            path.insert(0, start)
            break

        str_path = ', '.join(path)  # Join the vertices with ', '
        
        return str_path.split(', ')
    
# algorithm sourced from w3schools --> modified to consider application data
def dijkstra(start, end):
  # vars added or modified
  size = len(list(cart.keys()))
  start_vertex = node_num_dict[start]
  end_vertex = node_num_dict[end]

  distances = [float('inf')] * size
  predecessors = [None] * size
  distances[start_vertex] = 0
  visited = [False] * size

  for _ in range(size):
    # getting the closest node
    min_distance = float('inf')
    u = None
    for i in range(size):
      if not visited[i] and distances[i] < min_distance:
        min_distance = distances[i]
        u = i

    # ends cycle if empty neighborhood or reached end vertex
    if u is None or u == end_vertex:
      break

    visited[u] = True

    for v in range(size):
      #if self.adj_matrix[u][v] != 0 and not visited[v]:
      if num_node_dict[v] in adj[num_node_dict[u]] and not visited[v]:
        #alt = distances[u] + self.adj_matrix[u][v]
        alt = distances[u] + dist(num_node_dict[v], num_node_dict[u])
        if alt < distances[v]:
          distances[v] = alt
          #predecessors[v] = u
          predecessors[v] = num_node_dict.get(u)

  # return distances, predecessors
  # return distances[end_vertex], get_path(predecessors, start, end)
  return get_path(predecessors, start, end)
