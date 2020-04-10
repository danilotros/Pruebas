A=[1,3,46,1,3,9]
B=[]
C=[]
target=47
for i in A:
  for j in A:
    if (i+j)==target:
     B.append(sorted([i,j]))

for i in B:
  if not i in C:
    C.append(i)

for i in C:
  print(i)