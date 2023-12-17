

const instance =  await NftMarket.deployed();

instance.mintToken("https://green-obliged-gerbil-617.mypinata.cloud/ipfs/QmYaRQyscRajWquoLpD7q2vq917PFmvk7pv3M8MqtcYkQG?_gl=1*iwshcu*_ga*MTI1MzkyODUzNi4xNzAyNzM3OTk0*_ga_5RMPXG14TE*MTcwMjc3NjQ5OS40LjEuMTcwMjc3ODM4Ni4zOC4wLjA.","500000000000000000",{value:"25000000000000000",from: accounts[0]})
instance.mintToken("https://green-obliged-gerbil-617.mypinata.cloud/ipfs/QmNchJhQYQJiQG47eWYh5u8WWpzL3kB7Ddwc79pWeE4K1v?_gl=1*d6alz6*_ga*MTI1MzkyODUzNi4xNzAyNzM3OTk0*_ga_5RMPXG14TE*MTcwMjc3NjQ5OS40LjEuMTcwMjc3ODU0MS42MC4wLjA.","300000000000000000",{value:"25000000000000000",from: accounts[0] })


