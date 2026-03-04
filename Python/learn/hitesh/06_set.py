# set -> set makes unique values
# ------------------------------------------------
essential_spices = {"ginger", "tomato", "onion"}
optional_spices = { "cloves", "cardamom", "ginger"}

# union [it combine two sets and make unique values]
all_spices = essential_spices | optional_spices
print(f"all spices are {all_spices}")
# result: ------------
# all spices are {'ginger', 'tomato', 'onion', 'cardamom', 'cloves'}

# intersection [it combine two sets and make unique values]
common_spices = essential_spices & optional_spices
print(f"common spices are {common_spices}")
# result: ------------
# common spices are {'ginger'}

only_in_essential_spices = essential_spices - optional_spices
print(f"only in essential spices are {only_in_essential_spices}")
# result: ------------
# only in essential spices are {'tomato', 'onion'}

only_in_optional_spices = optional_spices - essential_spices
print(f"only in optional spices are {only_in_optional_spices}")
# result: ------------
# only in optional spices are {'cloves', 'cardamom'}

# membership [it check the value is present in the set or not]
print("ginger" in all_spices)
# result: ------------
# True

#  frozenset [it makes immutable set]
frozen_essential_spices = frozenset(essential_spices)
print(frozen_essential_spices)
# result: ------------
# frozenset({'ginger', 'tomato', 'onion'})


