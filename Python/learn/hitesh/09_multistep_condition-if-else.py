device_status = "inactive"
temp = 39

if device_status == "active":
    if temp > 38:
        print("Temperature is high")
    else:
        print("Temperature is normal")
else:
    print("Device is inactive")