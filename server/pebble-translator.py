import sys
import os
import json

def throw_err():
	print
	sys.stdout.flush()
	sys.exit(0)

if len(sys.argv) < 2:
	throw_err()
query = sys.argv[1].lower()
if not query:
	throw_err()

infile=open("infile.txt","w")
infile.write(query)
infile.write('\n')
infile.close()

os.system('moses -f phrase-model/moses.ini < infile.txt > outfile.txt')

outfile=open("outfile.txt","r")
out=outfile.readline()[0:-1]

sys.stdout.write(out)
sys.stdout.flush()
sys.exit(0)
