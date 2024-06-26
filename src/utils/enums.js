export const ROUTE_URLS = {
  HOME_PAGE_ROUTE_URL: "/home",
  CHECK_TRANSACTION_ROUTE_URL: "/pendingtransactions",
  CHECK_TRANSACTION_DETAIL_ROUTE_URL: "/pendingtransactionsdetail",
  LOGIN_PAGE_ROUTE_URL: "/auth",
  ENROLL_STORE_ROUTE_URL: "/enrollStrore",
}

export const FORM_TITLES = {
  HOME_PAGE_TITLE: "Home",
  CHECK_TRANSACTION_TITLE: "Pending Transactions",
  LOGIN_PAGE_TITLE: "Login",
  ENROLL_STORE_TITLE:"Enroll Store",
}

export const routesWithFormTitles = {}
for (const key in ROUTE_URLS) {
  const routeUrl = ROUTE_URLS[key]
  const formTitleKey = key.replace("ROUTE_URL", "TITLE")
  const formTitle = FORM_TITLES[formTitleKey]
  routesWithFormTitles[routeUrl] = formTitle
}

export const QUERY_KEY = {
  PENDING_TRANSACTION_LIST: "Pending_Transaction_List",
  CHECK_TRANSACTION_DATA: "Check_Transaction_data",
}
