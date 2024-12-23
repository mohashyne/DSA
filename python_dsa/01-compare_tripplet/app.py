import math
import os
import random
import re
import sys

#
# Complete the 'compareTriplets' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts following parameters:
#  1. INTEGER_ARRAY a
#  2. INTEGER_ARRAY b
#


# def compareTriplets(a, b):
#     # Write your code here
#     alice_score = 0
#     bob_score = 0
#     for i in range(3):
#         if a[i] > b[i]:
#             alice_score += 1
#         elif a[i] < b[i]:
#             bob_score += 1

#     return [alice_score, bob_score]


# using global variables
alice_score = 0
bob_score = 0

def compareTriplets(a, b):
    global alice_score, bob_score

    for i in range(min(len(a), len(b))):
        if a[i] > b[i]:
            alice_score += 1
        elif a[i] < b[i]:
            bob_score += 1
    return [alice_score, bob_score]



result = compareTriplets([5, 6, 7, 5, 6], [3, 6, 10, 3, 4])
print(result)



