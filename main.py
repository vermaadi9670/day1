import os
import sys

sys.setrecursionlimit(10**6)

def make_commit(days: int):
    if days < 1:
        # Push
        return os.system('git push')
    else:
        dates = f'{days} days ago'

        with open('date.txt', 'a') as file:
            file.write(f'{dates}\n')

        # Staging
        os.system("git add date.txt")

        # Commit
        os.system('git commit --date="'+dates+'" -m "First Commit"')
              
        return days * make_commit(days-1)
        
    

make_commit(365) #2498
