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
### Full Scenario
```console
Hello.
```
```console
List typical requirements for Talent acquisition software.
```
```console
Can you add a requirement for searching and filtering candidates?
```
```console
Can you send these requirements to the entire project team for comments?
```
```console
Can you list possible vendors for Talent acquisition software?
```
```console
Can you propose sourcing options for this software?
```
```console
Can you generate an RFP template?
```
```console
Can you generate it in a new tab portal?
```
```console
Compare the proposals based on our pre-defined criteria.
```
```console
Show a chart of the TCO for the different proposals.
```
```console
Propose communications with the top 2 vendors.
```
```console
Yes.
```
```console
Yes.
```
```console
Yes.
```
```console
Could you propose a negotiation strategy for Vandor A?
```
```console
Thank You.
```

### Important Links
- [Trinit Chatbot Main host](https://triniti-chatbot.onrender.com).     (might take 90 seconds to open in cold start)
- [System Architecture Diagrams](https://drive.google.com/file/d/15BB7L7vjhYlS1kbN9fIe8hJDQGMlzMmG/view?usp=sharing).
- [General Chatbot Architecture Explained](https://blog.vsoftconsulting.com/blog/understanding-the-architecture-of-conversational-chatbot)
- [Library for NLU (Natural Language Understanding)](https://www.npmjs.com/package/node-nlp).
- [Natural is a Javascript library for natural language processing](https://naturalnode.github.io/natural/).
- [Weaviate Vector Database](https://weaviate.io/developers/weaviate).
- [Milvus Vector Database](https://milvus.io/).
