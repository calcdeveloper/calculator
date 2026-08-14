import re

line = "*(Output: 7,200 Seconds = 2 Hours).*"
match = re.search(r'\*\((Output:.*?)\)\*', line)
print(match)
