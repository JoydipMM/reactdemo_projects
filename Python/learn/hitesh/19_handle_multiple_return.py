# handle multiple return
# -------------------------------------------------------------------------------
def function_one():
    pass

print(function_one()) # if nothing in function then it will return None
# Result: ------------
# None

def function_two():
    print("print function two")
    return

print(function_two())
# Result: ------------
# print function two
# None



# early of a function
# -------------------------------------------------------------------------------
def chai_status(cupleft):
    if cupleft == 0:
        return "chai is not ready"
    else:
        return "chai is ready"
        print("chai") # this will not execute after return

print(chai_status(0))
print(chai_status(5))
# Result: ------------
# chai is not ready
# chai is ready


# multiple values
# -----------------------------------------------------------------------------
def report():
    return 20,40 # sold, remaining

sold, remaining = report()
print(f"sold {sold}, remaining {remaining}")
# Result: ------------
# sold 20, remaining 40
# but if we add more values in return then it will give error.
# Because we de-structure only 2 values
# To solve it we can add _ in de-structuring variable
# this _ will ignore the value

def report_2():
    return 20,40,200, 900 # sold, remaining
sold, remaining, _, _ = report_2()
print(f"sold {sold}, remaining {remaining}")
# Result: ------------
# sold 20, remaining 40


