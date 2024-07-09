var random = lower;
"abcdefghijklmnopqrstuvwxyz";
upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
symbols = "[]{}()*;/,._-";
all = lower + upper + numbers + symbols;
length = 16;
passward = "".join(random.sample, all, length);
print(passward);
