# 測試docker container可否互相溝通

預設 network mode 爲 bridge ， container 以彼此名稱溝通 如 api1:port

network mode 設定爲 host 則 container 可以互相以 localhost:port 互相溝通，但 docker desktop for windows 支援有點問題？

在wsl 2 環境下設定 network mode host，以vs code Remote - Containers 將 api1 的 localhost:8000 map 到 主機的 8000，
倒是能使用
