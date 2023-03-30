from tkinter import *
from PIL import Image,ImageTk
root=Tk()
root.geometry("700x500")
frame=Frame(root,bg="blue", borderwidth=6, relief=SUNKEN)
frame.pack(side=LEFT)
frame2=Frame(root,bg="blue", borderwidth=6, relief=SUNKEN)
frame2.pack(side=TOP)
label=Label(frame,text="dhgughhgdhrhgidrghirgigir", bg ="red", fg="white", padx=13, pady=94, font="comicsansms 9 bold", borderwidth=3, relief=SUNKEN)
label2=Label(frame2,text="dhgughhgdhrhgidrghirgigir", bg ="red", fg="white", padx=13, pady=94, font="comicsansms 9 bold", borderwidth=3, relief=SUNKEN)
label.pack(side=TOP,anchor ="sw",padx=20,pady=20)
label2.pack(side=TOP,anchor ="se",padx=20,pady=20)
f3=Frame(root,bg="yellow",borderwidth=6, relief=SUNKEN)

f3.pack(side=TOP)
b1=Button(f3,fg="blue",text="sgsdgsgsrgsg")

b1.pack(padx=20,pady=20)
userentry = Entry(root, textvariable = StringVar())
passentry = Entry(root, textvariable = StringVar())
userentry.grid()
passentry.grid()
root.mainloop()