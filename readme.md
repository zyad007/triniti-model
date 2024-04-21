### Installing Command
```console
git clone https://github.com/Anas12312/chatbot-backend.git
npm install
```

### Starting Command
```console
npm start
```

### Building Command
```console
npm build
```

### Project Architecture

```
- model/
    - model.nlp ---> Natrual Language Proccessing Model for the chatbot
- fornt/ ---> Bundled frontend distrubtion 
- src/
    - controllers/
        - chatBotController.ts  ---> API Controller for the chatbot
    - responses/ ---> Static Responses that are generated for the user
        - actions/
        - charts/
        - etc...
    - routers/
        - chatRouter.ts ---> Express Router for the chatbot
    - services/
        - chatService.ts ---> Business Logic for the chatbot
        - modelService.ts ---> Business Logic for the NLP model
    - types/ ---> Generic Types for all kinds of responses handled by the system 
        - actions.ts
        - chart.ts
        - compare.ts
        - etc...
    - utils/ ---> Utillity functions
    - index.ts ---> Application entry point
- node_modules/
- package.json
- README.md
```

### Important Links

- [Trinit Chatbot Main host](https://triniti-chatbot.onrender.com).     (might take 90 seconds to open in cold start)
- [System Architecture Diagrams](https://drive.google.com/file/d/15BB7L7vjhYlS1kbN9fIe8hJDQGMlzMmG/view?usp=sharing).
- [Library for NLU (Natural Language Understanding)](https://www.npmjs.com/package/node-nlp).
- [Natural is a Javascript library for natural language processing](https://naturalnode.github.io/natural/).
- [Weaviate Vector Database](https://weaviate.io/developers/weaviate).
- [Milvus Vector Database](https://milvus.io/).


### NLP Model Project Architecture
```
- model.nlp ---> Trained NLP Model
- data/ ---> Model Training Input
    - add.requirement.txt
    - chart.TCO.txt
    - generate.rfp.txt
    - etc...
- answers/ ---> Model Training Output
    - add.requirement.txt
    - chart.TCO.txt
    - generate.rfp.txt
    - etc...
- typeings/
    - index.d.ts
- utils/
    - getFileData.ts
    - isEmptyOrSpaces.ts
    - trainIntent.ts
- index.ts ---> Application entry point
- trainModel.ts ---> Model Training script
- node_modules/
- package.json
- README.md
```