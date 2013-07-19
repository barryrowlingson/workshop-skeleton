library(knitr)
render_html()
source("hooks.R")
inFile = commandArgs(trailingOnly=TRUE)[1]
outFile = commandArgs(trailingOnly=TRUE)[2]

knit(inFile,tangle=TRUE,output=outFile)
