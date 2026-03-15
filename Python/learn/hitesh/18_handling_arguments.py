def make_chai(tea, milk, sugar):
    print(f"Making chai with {tea} tea, {milk} milk and {sugar} sugar")

make_chai("green", "no", "medium") # this is positional argument, where we know the order of the arguments
# result: Making chai with green tea, no milk and medium sugar

make_chai(tea="green", sugar="no", milk="no") # this is keyword argument
# result: Making chai with green tea, no milk and medium sugar


def special_chai(*ingradients, **extras):
    print(f"Ingradients: {ingradients}") # this is arg which makes a tuple
    print(f"Extras: {extras}") # this is kwarg which makes a dictionary

special_chai("ginger", "cardmom", sweetener="Honey", milk="no")

# result: ------------
# Ingradients: ('ginger', 'cardmom')
# Extras: {'sweetener': 'Honey', 'milk': 'no'}

# default parameter trap
def chai_order(order=[]):
    order.append("ginger")
    print(order)

chai_order()
# result: ------------
# ['ginger']

chai_order()
# result: ------------
# ['ginger', 'ginger']

chai_order(["suger"])
# result: ------------
# ['suger', 'ginger']

#  better way to use default parameter
def chai_order(order=None):
    if order is None:
        order = []
        print(order)

chai_order()
chai_order()
# result: ------------
# []
# []