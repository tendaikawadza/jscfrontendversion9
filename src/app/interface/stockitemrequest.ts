export interface Root {
    id: number
    dateOfConfirmation: string
    dateOfPreviousIssue: string
    departmentAuthorisedBy: string
    departmentCode: number
    departmentConfirmedBy: string
    departmentInitiatedBy: string
    departmentReceivedBy: string
    departmentRequesting: string
    designatedPersonApprovalName: string
    itemDescription: string
    itemNo: number
    itemReferenceNo: string
    stockRequests: StockRequest[]
    password: string
    previousIssueQuantity: number
    purposeOfIssue: string
    quantityRequested: number
    role: string
    signature: string
    stockDate: string
    stockRequestDate: string
    username: string
  }
  
  export interface StockRequest {
    endDate: string
    id: number
    startDate: string
    status: string
  }