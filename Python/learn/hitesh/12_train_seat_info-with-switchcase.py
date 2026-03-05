seat_type = input("Enter seat type: [sleeper/AC/general/luxury] ").lower()  # input from user and make the data in lower case
match seat_type:
    case "sleeper":
        print("Your seat is sleeper - No AC")
    case "ac":
        print("Your seat is AC - Comfortable")
    case "general":
        print("Your seat is general - No reservation")
    case "luxury":
        print("Your seat is luxury - premium seat with AC & free meals")
    case _:
        print("Invalid seat type")