Instalacja

```bash
npm i
```
```bash
npm start
```
```bash
npm run build
```
Po zbudowaniu projektu w folderze dist:
- w index.html trzeba poprawić sćieżki do plików w head (usunąć "/")
- folder img z katalogu assets przenieść poziom wyżej (do dist)
- jedyny wygenerowany obrazek jpg w dist przenieść do folderu styles i poprawić ścieżkę w CSS (usunąć "/")