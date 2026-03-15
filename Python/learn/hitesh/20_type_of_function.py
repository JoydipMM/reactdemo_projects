# type of function
# ----------------------------------------------------------------
# pure function, impure function
# recursive function
# lambdas/anonymous function


# pure function, impure function
# ----------------------------------------------------------------

# pure function
def pure_function(cups):
    return cups * 10

total_chai = 0
# impure function [this function is not recommended to use]
def impure_function(cups):
    global total_chai
    total_chai += cups
    return cups



# recursive function
# ----------------------------------------------------------------
def counter(n):
    print(n)
    if n == 0:
        return 0
    else:
        return counter(n-1)

counter(5)
# result: ------------
# 5
# 4
# 3
# 2
# 1
# 0



# lambdas/anonymous function
# ----------------------------------------------------------------
chai_type = ["plain chai", "masala chai", "fruit chai", "white chai", "masala chai"]

# lambda is a anonymous function which is anonimous function which is not having name, it is a use/through function and we use it and after use we forget it
fliter_chai = list(filter(lambda chai: chai == "masala chai", chai_type))
print(fliter_chai) # this will return fresh list
# class filter(
#    function: (_T@filter) -> Any, # this is a function that returns a boolean value
#    iterable: Iterable[_T@filter], # this is a list
# )
# result: ------------
# ['masala chai', 'masala chai']

fliter_chai = list(filter(lambda chai: chai != "masala chai", chai_type))
print(fliter_chai) # this will return fresh list
# result: ------------
# ['plain chai', 'fruit chai', 'white chai']