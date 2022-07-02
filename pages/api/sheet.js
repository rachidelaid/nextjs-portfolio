import gsheetdb from 'gsheetdb'

const db = new gsheetdb({
  spreadsheetId: '1U0eioFFtVayPqEsLMcXAr-Hv0o_yV2bBH9CHSG515ZY',
  sheetName: 'newsletter',
  credentialsJSON: {
    "type": "service_account",
    "project_id": "nextjs-portfolio-354911",
    "private_key_id": "8d8bd86ed047fc88c89b93ca70d404265514c488",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCkKIS0xg7lQl/b\nELz9ARWXctzMJAFpZo7BMI/DOlYNODg3c3HRhty/fUhGNYqU3sjppFtjoOjtqrHD\nNl+fMp0Rs1N42KhtFS6YDyGSk9sBrTsNalE/hzBaONBxSGo2oASqq5Xs0s0XhLgv\n9791tpYAyeueKIGTPPDDb2/AqIEggI1n+4tdjmDPSeaF+o6rmiaA+++IiO4qiZWB\nzMZAM+hD00TV0jpmOTaYQ0F5nl+sgY+PLqiMUz6eFcSYvjuwQaVrfismLEZUab2R\nNPFvTNY6uURd9nqkRkZ4LyTqjmN1zxW8t0zvOe8wbcxs2UT8qt7gZxFIY4l+tyYI\nvWhovaM3AgMBAAECggEAC9ms8svVaXFoMA0+R1lbsKonDEmRHIW9ym5yAlrkuWGU\nlVQtJD4DE4O8wuy8i1Cl2k/2FPQZvIZ0/K2hK4Hg2tVCMlgZmH5N9cYp20X3KmDS\nAX7qTJa6w9iUG4lpuXXFwHhQg18YVRlMnpHY7Wt32qi47Jrp97IPg1w5CgRgBfOE\nDT+/bJyY2mXb8jN8b6KKm/lEYv5fiRJJCUKs2pdodgo5e727g18ENe3+Wz6yWYW5\noC5tRxBPoXNiV1PdB8KZeWBlBFQ/Z5O759/spYMtDWcLEeiuIT4pDx9RQR4PzYVY\nuneabLYuO+oWeKZnRr0N3OKl6ILVOIq6bppRrdgUiQKBgQDfPOGH8b33hsWV3UzV\nBU767qgjpmpQm+h8PqOGRUYX/827NtOpCZ0mqrNJ0/u1DD8TcGlsbQ7mLW18miLi\nGBJkk0CIn7uDDqln93xqR2m0WOguWhNPP1C22VoM5lv15flDESmEhYmk67vXM/UO\nWJkudBDwBJJxhj6dCAu4toEqbQKBgQC8P//XWu4lstxjs+kM+WjdMNNe/1pFfoOM\nU8n0NcmqF9RuMEVwkJTxMhw1RElZ03+7DnrqVWaBk9QtOaGNq3fbmp1/o24EfGVm\nxl8phROIA0CVZT815WdJUJE3z2vl+1iYnnDksio0nmTh+QwLEt70VgPWh1yNetPS\nd8CNN/U9swKBgBF9xLIRJ/BQGAUxDMcYHmMc9gGtFWFxhdrOUaPAo8hXm7gSiK0S\n+sQ/1cJwIKXD6uFMCoabWPKCFrUPorISbsaAnyrVUSzopi9mPdJZ/BdMbAzNs/ue\nm2VoTFz8Y7I1rb0qiBVBHVLVwacQBCB2orH4GCemRA8vFJLbQYfcjOxVAoGATFxJ\nkzm3UGN1MpxP9ItXFiIwG2DJZVckVU/Ho+ANpYl1Ch1ajYaYZB5HgvPoLR+1uFLv\nWQ67PeSRNKcj+SuMuu/E43mPrxImr8HX6Ceq/IkVMYSYV2xusTaVMWZaBjgmgAIF\nGT+MDzwQ//jeAb/t4H7jn6nYySsBsWYSHTaNrDECgYBOzwzGBiTFvo/WNv+jS3ug\n3gjSrgnOW60g+voKpoxRbS1E8I69u6IVBh6bcxfF+KyIqSbB8e5CyBF/Dcis/d1K\njk1E5Kfzp9sFRIbjrRhAO6SgbKjmgs+p3zIOhm6JHXdGwQe+NxLiimGUWG38zJT2\nOLvYXbLLG9DSRksGAbbDWw==\n-----END PRIVATE KEY-----\n",
    "client_email": "nextjs-portfolio@nextjs-portfolio-354911.iam.gserviceaccount.com",
    "client_id": "113675619124066598717",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/nextjs-portfolio%40nextjs-portfolio-354911.iam.gserviceaccount.com"
  }
})

function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    const { name, email, message } = req.body;
    const time = new Date().toGMTString();

    db.insertRows([
      [time, name, email, message]
    ])

    res.send("OK");
  }
}

export default handler;