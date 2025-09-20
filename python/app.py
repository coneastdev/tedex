import os
import json

pathToData = str(os.getcwd()) + "/tedtalks-audio-list-master/data/records/"
compiledData = []

print("compiling list from data...\n\n")

for fileName in os.listdir(pathToData):
    with open(os.path.join(pathToData + fileName)) as file:
        data = json.loads(file.read())
        
        try:
            compiledData = compiledData + [[data["thumbnail"], data["video"]["medium"]]]
        except:
            print(data["title"] + " does not have a valid source")


save = open("list.json", "w")
save.write(str(json.dumps(compiledData)))

print("\n\compilation finished, see 'list.json'")