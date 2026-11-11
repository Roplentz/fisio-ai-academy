"""FisioResearch Agent 1.0 — busca exploratória PubMed, sem chave de API."""
import csv
import json
from urllib.parse import urlencode
from urllib.request import Request, urlopen

BASE = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/"
QUERY = '("transcutaneous electrical nerve stimulation" OR TENS) AND ("blood pressure" OR hypertension)'
LIMIT = 20

def fetch_json(endpoint, params):
    url = BASE + endpoint + "?" + urlencode(params)
    request = Request(url, headers={"User-Agent": "FisioResearchAcademy/1.0 (educational)"})
    with urlopen(request, timeout=30) as response:
        return json.load(response)

def main():
    search = fetch_json("esearch.fcgi", {"db": "pubmed", "term": QUERY, "retmax": LIMIT, "retmode": "json"})
    ids = search["esearchresult"]["idlist"]
    print("Total encontrado:", search["esearchresult"]["count"])
    if not ids:
        print("Nenhum registro retornado.")
        return
    summary = fetch_json("esummary.fcgi", {"db": "pubmed", "id": ",".join(ids), "retmode": "json"})
    rows = []
    for pmid in ids:
        item = summary["result"][pmid]
        rows.append({"pmid": pmid, "titulo": item.get("title", ""), "ano": item.get("pubdate", "")[:4], "url": "https://pubmed.ncbi.nlm.nih.gov/" + pmid + "/"})
    with open("fisioresearch_resultados.csv", "w", newline="", encoding="utf-8-sig") as file:
        writer = csv.DictWriter(file, fieldnames=["pmid", "titulo", "ano", "url"])
        writer.writeheader()
        writer.writerows(rows)
    for row in rows:
        print(row["ano"], row["pmid"], row["titulo"])
    print("Arquivo criado: fisioresearch_resultados.csv")

if __name__ == "__main__":
    main()
