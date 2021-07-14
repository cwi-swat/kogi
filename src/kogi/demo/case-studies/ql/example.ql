# https://github.com/mpempekos/QL/blob/master/sampleQuestionnaire_2

form taxOfficeExample { 
  
  hasSoldHouse:  "Did you sell a house in 2010?"   boolean
  
  hasBoughtHouse: "Did you buy a house in 2010?"     boolean
  
  hasMaintLoan:  "Did you enter a loan?"     boolean

  if (hasSoldHouse) {
  
    sellingPrice: "What was the selling price?"  int
    
    privateDebt: "Private debts for the sold house:"  int
    
    valueResidue: "Value residue:"  int =  (sellingPrice - privateDebt)
  }

}
