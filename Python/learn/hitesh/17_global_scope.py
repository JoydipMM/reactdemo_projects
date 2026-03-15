# global scope
# -------------------------------------------------------------------------------

chai_type = "plain chai"
print(f"original chai type before update is {chai_type}")
def print_chai_type():
    def kichen():
        global chai_type # this will update the chai_type variable in global scope also
        chai_type = "masala chai"
    kichen()
    print(f"updated chai type is {chai_type}")

print_chai_type()
print(f"original chai type is {chai_type}")

# Result: ------------
# original chai type before update is plain chai
# updated chai type is masala chai
# original chai type is masala chai