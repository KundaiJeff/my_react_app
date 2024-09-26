const initialState = {
    data : [

        {
            id:4,
            title: "job",
            location:"Cape Town",
            contract:"",
            shift:"",
            payrate:"",
            techstack:"",
            industry: "IT Industry",
            description: "US Based estate planning law firm is seeking a highly motivated and results-driven individual for the role of paralegal. This position offers the flexibility of working from home while still contributing to the growth and success of our organization. If you have excellent communication skills, are able to explain legal information to a lay person, and a passion for the legal industry, we encourage you to apply with a cover letter.",
            Companyname: "dep",
          },
          
          {
            id:4,
            title: "jober",
            location:"Cape Town",
            contract:"",
            shift:"",
            payrate:"",
            techstack:"",
            industry: "IT Industry",
            description: "US Based estate planning law firm is seeking a highly motivated and results-driven individual for the role of paralegal. This position offers the flexibility of working from home while still contributing to the growth and success of our organization. If you have excellent communication skills, are able to explain legal information to a lay person, and a passion for the legal industry, we encourage you to apply with a cover letter.",
            Companyname: "dep",
            
          },
          {
            id:4,
            title: "job",
            location:"Cape Town",
            contract:"",
            shift:"",
            payrate:"",
            techstack:"",
            industry: "IT Industry",
            description: "US Based estate planning law firm is seeking a highly motivated and results-driven individual for the role of paralegal. This position offers the flexibility of working from home while still contributing to the growth and success of our organization. If you have excellent communication skills, are able to explain legal information to a lay person, and a passion for the legal industry, we encourage you to apply with a cover letter.",
            Companyname: "dep",
          },
          {
            id: 5,
            title: "job",
            location:"Cape Town",
            industry: "IT Industry",
            description: "US Based estate planning law firm is seeking a highly motivated and results-driven individual for the role of paralegal. This position offers the flexibility of working from home while still contributing to the growth and success of our organization. If you have excellent communication skills, are able to explain legal information to a lay person, and a passion for the legal industry, we encourage you to apply with a cover letter.",
            Companyname: "dep",
          },
          {
            id: 6,
            title: "job",
            location:"Cape Town",
            industry: "IT Industry",
            description: "US Based estate planning law firm is seeking a highly motivated and results-driven individual for the role of paralegal. This position offers the flexibility of working from home while still contributing to the growth and success of our organization. If you have excellent communication skills, are able to explain legal information to a lay person, and a passion for the legal industry, we encourage you to apply with a cover letter.",
            Companyname: "dep",
          },
          {
            id: 2,
            title: "job",
            location:"Cape Town",
            industry: "IT Industry",
            description: "US Based estate planning law firm is seeking a highly motivated and results-driven individual for the role of paralegal. This position offers the flexibility of working from home while still contributing to the growth and success of our organization. If you have excellent communication skills, are able to explain legal information to a lay person, and a passion for the legal industry, we encourage you to apply with a cover letter.",
            Companyname: "dep",
          },
          {
            id: 2,
            title: "job",
            location:"Cape Town",
            industry: "IT Industry",
            description: "US Based estate planning law firm is seeking a highly motivated and results-driven individual for the role of paralegal. This position offers the flexibility of working from home while still contributing to the growth and success of our organization. If you have excellent communication skills, are able to explain legal information to a lay person, and a passion for the legal industry, we encourage you to apply with a cover letter.",
            Companyname: "dep",
          },
          {
            id: 2,
            title: "job",
            location:"Cape Town",
            industry: "IT Industry",
            description: "US Based estate planning law firm is seeking a highly motivated and results-driven individual for the role of paralegal. This position offers the flexibility of working from home while still contributing to the growth and success of our organization. If you have excellent communication skills, are able to explain legal information to a lay person, and a passion for the legal industry, we encourage you to apply with a cover letter.",
            Companyname: "dep",
          },
          {
            id: 2,
            title: "job",
            location:"Cape Town",
            industry: "IT Industry",
            description: "US Based estate planning law firm is seeking a highly motivated and results-driven individual for the role of paralegal. This position offers the flexibility of working from home while still contributing to the growth and success of our organization. If you have excellent communication skills, are able to explain legal information to a lay person, and a passion for the legal industry, we encourage you to apply with a cover letter.",
            Companyname: "dep",
          },
          {
            id: 2,
            title: "job",
            location:"Cape Town",
            industry: "IT Industry",
            description: "US Based estate planning law firm is seeking a highly motivated and results-driven individual for the role of paralegal. This position offers the flexibility of working from home while still contributing to the growth and success of our organization. If you have excellent communication skills, are able to explain legal information to a lay person, and a passion for the legal industry, we encourage you to apply with a cover letter.",
            Companyname: "dep",
          },
          {
            id: 2,
            title: "job",
            location:"Cape Town",
            industry: "IT Industry",
            description: "US Based estate planning law firm is seeking a highly motivated and results-driven individual for the role of paralegal. This position offers the flexibility of working from home while still contributing to the growth and success of our organization. If you have excellent communication skills, are able to explain legal information to a lay person, and a passion for the legal industry, we encourage you to apply with a cover letter.",
            Companyname: "dep",
          },
          {
            id: 2,
            title: "job",
            location:"Cape Town",
            industry: "IT Industry",
            description: "US Based estate planning law firm is seeking a highly motivated and results-driven individual for the role of paralegal. This position offers the flexibility of working from home while still contributing to the growth and success of our organization. If you have excellent communication skills, are able to explain legal information to a lay person, and a passion for the legal industry, we encourage you to apply with a cover letter.",
            Companyname: "dep",
          },
          {
            id: 2,
            title: "job",
            location:"Cape Town",
            industry: "IT Industry",
            description: "US Based estate planning law firm is seeking a highly motivated and results-driven individual for the role of paralegal. This position offers the flexibility of working from home while still contributing to the growth and success of our organization. If you have excellent communication skills, are able to explain legal information to a lay person, and a passion for the legal industry, we encourage you to apply with a cover letter.",
            Companyname: "dep",
          },
          {
            id: 2,
            title: "job",
            location:"Cape Town",
            industry: "IT Industry",
            description: "US Based estate planning law firm is seeking a highly motivated and results-driven individual for the role of paralegal. This position offers the flexibility of working from home while still contributing to the growth and success of our organization. If you have excellent communication skills, are able to explain legal information to a lay person, and a passion for the legal industry, we encourage you to apply with a cover letter.",
            Companyname: "dep",
          },
       
       
       
       
      ],
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_ITEM":
        return { ...state, 
            arr:[...state.arr, action.newItem]
         };
      case "DELETE_ITEM":
        return { ...state, 
            arr:[...state.arr, action.deleteItem]
        };
      default:
        return state;
    }
  };
  
  export default dataReducer;