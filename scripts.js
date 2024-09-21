document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.dropdown-content a');
    const contentSection = document.getElementById('content');

    const contentData = {
        home: `
            <h2>HOME</h2>
            <p>Bun venit la acest proiect care mi-a consumat zilele, pe acest site sunt prezentati algoritmii elementari</p>
        `,
        prelucrarea: `
        <h3>Prelucrarea cifrelor unui număr</h3>
        <p>Cod C++ pentru prelucrarea cifrelor unui număr:</p>
        <pre><code class="language-cpp">
#include <iostream>
using namespace std;

int sumaCifrelor(int n) {
    int suma = 0;
    while (n > 0) {
        suma += n % 10;  // Adăugăm ultima cifră la sumă
        n /= 10;         // Eliminăm ultima cifră
    }
    return suma;
}

int cifraMaxima(int n)
{
    int max = -1;
    while(n)
    {
        if(n%10>max)max = n%10;
        n /= 10;
    }
    return max;
}

int Oglinditul(int n)
{
    int ogl = 0;
    while(n)
    {
        ogl = ogl*10+n%10;
        n /= 10;
    }
    return ogl;
}

int primaCifra(int n)
{
    while(n>10)
    {
        n/=10;
    }
    return n;
}

int cifImpElim(int n)
{
    int ogl = 0;
    while(n)
    {   if(n%10%2==0)
        ogl = ogl*10+n%10;
        n /= 10;
    }
    while(ogl)
    {
        n = n*10+ogl%10;
        ogl /= 10;
    } 
    return n;
}

int dubPar(int n)
{
    int v[105],c;
    while(n)
    {
        v[c++]=n%10;
        n/=10;
    }
    if(v[0]%2==0)
        nr=1;
    for(int i=1;i<c;i++)
        if(v[i]%2==0)
        {
            if(v[i]*2>9)
                v[i-1]++;
            v[i]*=2;
        }
    for(i=1;i<c;i++)
        nr=nr*10+v[i];
    return nr;
}
        </code></pre>
    `,
    divizori: `<h3>Divizorii unui număr</h3><p>Descriere și cod pentru afișarea divizorilor unui număr:</p>
    <pre><code class="language-cpp">
#include <iostream>
using namespace std;

void afisareDivizori(int n) {
    cout << "Divizorii lui " << n << " sunt: ";
    for (int i = 1; i <= n; i++) {
        if (n % i == 0) {
            cout << i << " ";
        }
    }
    cout << endl;
}
int catiDiv(int n)
{   
    int c;
    for(int i =1; i*i<=n;i++)
    {
        if(n%d==0)c++;
    }
    return c;
}
bool prim(int n)
{   
    int c;
    for(int i =1; i*i<=n;i++)
    {
        if(n%d==0)c++;
    }
    if(c==2)return 1;
    return 0;
}
    </code></pre>`,
    interschimbare: `<h3>Interschimbarea a două variabile</h3><p>Descriere și cod pentru interschimbarea a două variabile:</p>
    <pre><code class="language-cpp">

void interschimba(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}

void interschimbaCuInmultire(int &a, int &b){
    a += b;
    b = a - b;
    a -= b;
}

void interschimbareSwap(int &a, int &b){
    swap(a,b);
}

    </code></pre>`,
    cmmdc: `<h3>CMMDC și CMMMC</h3><p>Descriere și cod pentru calcularea CMMDC și CMMMC:</p>
    <pre><code class="language-cpp">
int cmmdc(int a, int b) {
    while (b != 0) {
        int r = a % b;
        a = b;
        b = r;
    }
    return a;
}

int cmmdcScadeere(int a, int b){
    while(a != b) {
        if(a > b) a = a - b;
        else b = b - a;
    }
    return a;
}

int cmmmc(int a, int b) {
    return a * b / cmmdc(a, b);
}

    </code></pre>`,
    factori: `<h3>Descompunerea în factori primi</h3><p>Descriere și cod pentru descompunerea în factori primi:</p>
    <pre><code class="language-cpp">
void factoriPrimi(int n) {
    cout << "Factorii primi ai lui " << n << " sunt: ";
    for (int i = 2; i * i <= n; i++) {
        while (n % i == 0) {
            cout << i << " ";
            n /= i;
        }
    }
    if (n > 1) {
        cout << n;
    }
    cout << endl;
}

    </code></pre>`,
    fibonacci: `<h3>Șirul Fibonacci</h3><p>Descriere și cod pentru generarea șirului Fibonacci:</p>
    <pre><code class="language-cpp">
#include <iostream>
using namespace std;

void fibonacci(int n) {
    int a = 0, b = 1, c;
    cout << "Șirul Fibonacci: " << a << " " << b << " ";
    for (int i = 2; i < n; i++) {
        c = a + b;
        a = b;
        b = c;
        cout << c << " ";
    }
    cout << endl;
}

void fibonacciImpare(int n) {
    int a = 0, b = 1, c;
    cout << "Șirul Fibonacci: " << a << " " << b << " ";
    for (int i = 2; i < n; i++) {
        c = a + b;
        a = b;
        b = c;
        if(c%2==1)
        cout << c << " ";
    }
    cout << endl;
}
    
void fibonacci(int n) {
    int a = 0, b = 1, c;
    cout << "Șirul Fibonacci: " << a << " " << b << " ";
    for (int i = 2; i < n; i++) {
        c = a + b;
        a = b;
        b = c;
        cout << c << " ";
    }
    cout << endl;
}

bool FiboVerif(int n){
    int a=0, b=1, c;
    bool ok;
    while(c<=n)
    {
        c = a+b;
        a = b;
        b = c;
        if(c==n)return 1;
    }
    return 0;
}

    </code></pre>`,
    baze:`<h3>Trecerea dintr-o baza în alta</h3>
    <code><pre>
int charToValue(char c) {
    if (c >= '0' && c <= '9')
        return c - '0';
    else if (c >= 'A' && c <= 'Z')
        return c - 'A' + 10;
    else if (c >= 'a' && c <= 'z')
        return c - 'a' + 10;
    return -1; // În caz de eroare
}

int toBase10(const string &num, int base) {
    int value = 0;
    int power = 1; // Baza la puterea 0
    for (int i = num.length() - 1; i >= 0; i--) {
        int digitValue = charToValue(num[i]);
        if (digitValue >= base) {
            cout << "Cifra " << num[i] << " nu este validă în baza " << base << ".\n";
            return -1;
        }
        value += digitValue * power;
        power *= base;
    }
    return value;
}

string fromBase10(int num, int base) {
    if (num == 0)
        return "0";

    string result = "";
    while (num > 0) {
        int remainder = num % base;
        if (remainder < 10)
            result = char(remainder + '0') + result;
        else
            result = char(remainder - 10 + 'A') + result;
        num /= base;
    }
    return result;
}

string convertBase(const string &num, int fromBase, int toBase) {
    int decimalValue = toBase10(num, fromBase);
    if (decimalValue == -1) {
        return "Conversie invalidă!";
    }
    return fromBase10(decimalValue, toBase);
}
    </code></pre>`,
    declararevectori: `<h3>Declararea. Citirea. Afișarea</h3><p>Exemplu de cod pentru declararea, citirea și afișarea unui vector:</p>
    <pre><code class="language-cpp">
#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Introduceți dimensiunea vectorului: ";
    cin >> n;
    int v[n];
    cout << "Introduceți elementele vectorului: ";
    for (int i = 0; i < n; i++) {
        cin >> v[i];
    }
    cout << "Elementele vectorului sunt: ";
    for (int i = 0; i < n; i++) {
        cout << v[i] << " ";
    }
    cout << endl;
    return 0;
}
    </code></pre>`,
    maxmin: `<h3>Maximul și minimul în vector</h3><p>Descriere și cod pentru găsirea valorilor maxime și minime într-un vector:</p>
    <pre><code class="language-cpp">
void gasesteMaxMin(int v[], int n, int &max, int &min) {
    max = min = v[0];
    for (int i = 1; i < n; i++) {
        if (v[i] > max) max = v[i];
        if (v[i] < min) min = v[i];
    }
}
int gasesteCatiMin(int v[], int n, int &max, int &min) {
    max = min = v[0];
    int c=0;
    for (int i = 1; i < n; i++) {
        if (v[i] < min) min = v[i];
    }
    for (int i = 1; i < n; i++) {
        if(v[i]==min)c++;
    }
    return c;
}
int gasesteCatiIntreMaxMin(int v[], int n, int &max, int &min) {
    max = min = v[0];
    imax = imin = 0;
    for (int i = 1; i < n; i++) {
        if (v[i] > max)
        {
        max = v[i];
        imax = i;
        }
        if (v[i] < min)
        {
        min = v[i];
        imin = i;
        }
    }
    if(imin<imax)
        return imax-imin;
    return imin - imax;
}

    </code></pre>`,
    sumeproduse: `<h3>Sume și produse</h3><p>Descriere și cod pentru calcularea sumelor și produselor elementelor unui vector:</p>
    <pre><code class="language-cpp">
int sumaElementelorPrime(const vector<int>& vec) {
    int suma = 0;
    for (int num : vec) {
        if (estePrim(num)) {
            suma += num;
        }
    }
    return suma;
}

int produsPrimaJumatate(const vector<int>& vec) {
    int produs = 1;
    for (size_t i = 0; i < vec.size() / 2; ++i) {
        produs *= vec[i];
    }
    return produs;
}

int sumaADouaJumatate(const vector<int>& vec) {
    int suma = 0;
    for (size_t i = vec.size() / 2; i < vec.size(); ++i) {
        suma += vec[i];
    }
    return suma;
}

int sumaElementelorDivizibileCuPrimul(const vector<int>& vec) {
    if (vec.empty()) return 0;
    int primulElement = vec[0];
    int suma = 0;
    for (int num : vec) {
        if (num % primulElement == 0) {
            suma += num;
        }
    }
    return suma;
}

int produsInterval(const vector<int>& vec) {
    if (vec.empty()) return 1;
    int primul = vec[0];
    int ultimul = vec[vec.size() - 1];
    int produs = 1;
    for (int num : vec) {
        if (num >= primul && num <= ultimul) {
            produs *= num;
        }
    }
    return produs;
}

int sumaElementelorCuSumaCifrelorPara(const vector<int>& vec) {
    int suma = 0;
    for (int num : vec) {
        int sumaCifre = 0;
        int n = abs(num);
        while (n > 0) {
            sumaCifre += n % 10;
            n /= 10;
        }
        if (sumaCifre % 2 == 0) {
            suma += num;
        }
    }
    return suma;
}

    </code></pre>`,
    perechi: `<h3>Perechi de elemente în vector</h3><p>Descriere și cod pentru identificarea perechilor de elemente într-un vector:</p>
    <pre><code class="language-cpp">
void perechiAlaturate(const std::vector<int>& v) {
    for (size_t i = 0; i < v.size() - 1; ++i) {
        std::cout << "(" << v[i] << ", " << v[i + 1] << ")" << std::endl;
    }
}

void toatePerechile(const std::vector<int>& v) {
    for (size_t i = 0; i < v.size(); ++i) {
        for (size_t j = i + 1; j < v.size(); ++j) {
            std::cout << "(" << v[i] << ", " << v[j] << ")" << std::endl;
        }
    }
}
    </code></pre>`,
    ordonare:`<code><pre>
    void bubbleSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) { //pui < pentru a schimba ordinea de sortare
                swap(arr[j], arr[j + 1]);
            }
        }
    }
}

void selectieDescrescatoare(std::vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i++) {
        int maxIndex = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
            }
        }
        std::swap(arr[i], arr[maxIndex]);
    }
}

void selectieCrescatoare(std::vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i++) {
        int minIndex = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        std::swap(arr[i], arr[minIndex]);
    }
}

</code></pre>`,
    interclasare:`<code><pre>
    #include <iostream>

using namespace std;

int main()
{
   //elementele trebuie sa fie ordonate crescator in cei doi vectori
   int n, a[11];
   cin>>n;
   for(int i=1;i<=n;i++)
      cin>>a[i];
   int m, b[11];
   cin>>m;
   for(int i=1;i<=m;i++)
      cin>>b[i];
   //ne vom lua un al treilea vector in care le vom interclasa
   int c[21];
   int k=0; //cu ajutorul acestei variabile vom pune elementele in vector
   int i=1, j=1;
   //vom parcurge simultan cei doi vectori si vom compara elementele
   while(i<=n && j<=m)
   {
      if(a[i]<b[j]) //punem cel mai mic element dintre cele doua
      {
         k++;
         c[k]=a[i];
         i++;
      }
      else
      {
         k++;
         c[k]=b[j];
         j++;
      }
   }
   // exista posibilitate sa terminam elementele dintr-un vector, iar din altul nu
   while(i<=n) //cat timp mai avem elemente in vectorul a[]
   {
      k++;
      c[k]=a[i];
      i++;
   }
   while(j<=m) //cat timp mai avem elemente in vectorul b[]
   {
      k++;
      c[k]=b[j];
      j++;
   }
   // afisam vectorul obtinut
   for(i=1;i<=k;i++)
      cout<<c[i]<<' ';
}
    </code></pre>`,
    inserare:`<code><pre>
    void stergereElement(vector<int>& vec, int index) {
    if (index >= 0 && index < vec.size()) {
        vec.erase(vec.begin() + index);
    } else {
        std::cout << "Index de ștergere invalid!" << std::endl;
    }
}
    void inserareElement(vector<int>& vec, int element, int index) {
    if (index >= 0 && index <= vec.size()) {
        vec.insert(vec.begin() + index, element);
    } else {
        std::cout << "Index de inserare invalid!" << std::endl;
    }
}</code></pre>`,
    veccons:`<code><pre>
    vector<int> construireVector(const std::vector<int>& vec) {
    std::vector<int> vecNou = vec; // Copiere directă a vectorului inițial
    return vecNou;
}
    
vector<int> inversareVector(const std::vector<int>& vec) {
    std::vector<int> vecInversat(vec.rbegin(), vec.rend()); // Inversare folosind iteratori inversi
    return vecInversat;
}
    </code></pre>`,
    secvcresc:`<code><pre>
    int ceaMaiLungaSecventaCrescatoare(const std::vector<int>& vec) {
    if (vec.empty()) {
        return 0; // Dacă vectorul este gol, returnăm 0
    }

    int lungimeMaxima = 1; // Lungimea maximă găsită
    int lungimeCurenta = 1; // Lungimea secvenței curente

    // Iterăm prin vector începând de la al doilea element
    for (size_t i = 1; i < vec.size(); ++i) {
        if (vec[i] > vec[i - 1]) {
            // Dacă elementul curent este mai mare decât cel precedent, creștem lungimea curentă
            lungimeCurenta++;
        } else {
            // Dacă secvența se întrerupe, actualizăm lungimea maximă și resetăm lungimea curentă
            lungimeMaxima = std::max(lungimeMaxima, lungimeCurenta);
            lungimeCurenta = 1;
        }
    }

    // Verificăm din nou la final pentru a captura eventual ultima secvență crescătoare
    lungimeMaxima = std::max(lungimeMaxima, lungimeCurenta);

    return lungimeMaxima;
}
    </code></pre>`,
    frecv:`<code><pre>
    vector<int> vectorDeFrecventa(vector<int>& vec) {
    if (vec.empty()) return {};

    int maxValue = *std::max_element(vec.begin(), vec.end());
    std::vector<int> frecventa(maxValue + 1, 0);

    for (int num : vec) {
        frecventa[num]++;
    }

    return frecventa;
}
</code></pre>`,
    declararematrici: `<h3>Declarare. Citire. Afișare</h3><p>Exemplu de cod pentru declararea, citirea și afișarea unei matrici:</p>
    <pre><code class="language-cpp">
#include <iostream>
using namespace std;

int main() {
    int m, n;
    cout << "Introduceți numărul de linii și coloane: ";
    cin >> m >> n;
    int mat[m][n];
    cout << "Introduceți elementele matricei: " << endl;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            cin >> mat[i][j];
        }
    }
    cout << "Elementele matricei sunt: " << endl;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            cout << mat[i][j] << " ";
        }
        cout << endl;
    }
    return 0;
}
    </code></pre>`,
    chenar: `<h3>Chenarul unei matrici</h3><p>Descriere și cod pentru afișarea chenarului unei matrici:</p>
    <pre><code class="language-cpp">
void afisareChenar(const vector<vector<int>>& matrice) {
    int n = matrice.size();
    if (n == 0) return;
    int m = matrice[0].size();
    if (m == 0) return;

    for (int j = 0; j < m; j++) {
        cout << matrice[0][j] << " ";
    }

    for (int i = 1; i < n - 1; i++) {
        cout << matrice[i][m - 1] << " ";
    }

    if (n > 1) {
        for (int j = m - 1; j >= 0; j--) {
            cout << matrice[n - 1][j] << " ";
        }
    }

    for (int i = n - 2; i > 0; i--) {
        cout << matrice[i][0] << " ";
    }

    cout << endl;  // Linie nouă la final
}
    </code></pre>`,
    maxminmatrice: `<h3>Maximul/minimul dintr-o matrice</h3><p>Descriere și cod pentru găsirea valorilor maxime și minime într-o matrice:</p>
    <pre><code class="language-cpp">
#include <iostream>
using namespace std;

void gasesteMaximMinim(vector<vector<int>>& matrice) {
    if (matrice.empty() || matrice[0].empty()) {
        cout << "Matricea este goală." << endl;
        return;
    }

    int maxim = numeric_limits<int>::min();
    int minim = numeric_limits<int>::max();

    for (const auto& linie : matrice) {
        for (int element : linie) {
            // Actualizăm maximul
            if (element > maxim) {
                maxim = element;
            }
            // Actualizăm minimul
            if (element < minim) {
                minim = element;
            }
        }
    }

    cout << "Maximul elementelor din matrice: " << maxim << endl;
    cout << "Minimul elementelor din matrice: " << minim << endl;
}
    </code></pre>`,
    sumaimpare: `<h3>Suma elementelor impare pe linia K</h3><p>Descriere și cod pentru calcularea sumei elementelor impare pe o anumită linie a unei matrici:</p>
    <pre><code class="language-cpp">
void operatiiPeLiniaK(vector<vector<int>>& matrice, int K) {
    if (K < 0 || K >= matrice.size()) {
        cout << "Linia K este in afara limitelor matricei." << endl;
        return;
    }

    int suma = 0;
    int produs = 1;
    int minim = numeric_limits<int>::max();
    int numarImpare = 0;

    for (int j = 0; j < matrice[K].size(); j++) {
        int element = matrice[K][j];
        
        suma += element;

        produs *= element;

        if (element < minim) {
            minim = element;
        }

        if (element % 2 != 0) {
            numarImpare++;
        }
    }

    cout << "Pentru linia " << K << ":" << endl;
    cout << "Suma elementelor: " << suma << endl;
    cout << "Produsul elementelor: " << produs << endl;
    cout << "Minimul elementelor: " << minim << endl;
    cout << "Numarul elementelor impare: " << numarImpare << endl;
}
    </code></pre>`,
    genmat:`<code><pre>
void geneMatIndex(int rows, int cols, int matrix[][10]) {
    for (int i = 0; i < rows; ++i) {
        for (int j = 0; j < cols; ++j) {
            matrix[i][j] = i * cols + j;
        }
    }
}
void genMatRand(int rows, int cols, int matrix[][10]) {
    for (int i = 0; i < rows; ++i) {
        for (int j = 0; j < cols; ++j) {
            matrix[i][j] = rand() % 100;
        }
    }
}</code></pre>`,
    problems:`<p>
    </p>`,
    documentatie:`
    <h3>Prezentarea posibilelor îmbunătățiri a site-ului și prezentare a codului important</h3>
    <p>Codul aflat în prezentul cod este bazat pe dynamic loading parțial, lucru care ar puteas fi optimizat astfel încât să fie complet. Momentat pentru a încărca codul trebuie modificată lista de navigație, creată o clasă de obiect și apoi din fișierul scripts scris codul html. Acest lucru este complex și poate crea complexitate inutilă.</p>
    <pre><code>    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); 
            const contentId = this.getAttribute('data-content');
            const content = contentData[contentId];
            if (content) {
                contentSection.innerHTML = content;
                Prism.highlightAll(); 
            }
        });
    });

    
    contentSection.innerHTML = contentData.home;
    Prism.highlightAll();
});</code></pre>
    <p>Mai sus este o secvență din codul pentru încărcare dinamică a content-ului. După cum se poate observa toate datele sunt ținute într-o singură variabilă. Acest lucru este și nesigur din punct de vedere de securitate pentru că daca în loc de cod se aflau alte date acestea ar fi fost încărcate client-side în loc de a rămâne server-side, acest lucru ar oferi oricărui utilizator acces la toate datele de pe site.</p>
    <h3>De ce am ales să codăm de la 0 site-ul și nu l-am făcut cu ajutorul unei aplicații?</h3>
    <p>A zis ambii că ar fi o provocare bună pentru noi.</p>
    <h3>Structura site-ului</h3>
    <p>Ne-am bazat pe ideea de a crea un singur fișier html <code>index.html</code> care să conțină referințe de date care apelează la un script javascript(<code>scripts.js</code>) care returnează secvența necesară de cod și text.</p>
    <h3>Modalități de utilizare</h3>
    <p>Site-ul prezintă o bară simplă de navigație organizată pe secvențe de cod relevante, printr-un simplu click ajungi unde vrei sa ajungi, daca vrei să te întorci la home dai refresh sau apeși pe butonul de home</p>
    <h3>Structuri de date folosite</h3>
    <p>Structurile relevante sunt header-ul care conține navigația, respectiva folosindu-se de tag-ul "ul"(listă unde nu contează ordinea) și "li"(listă). Alt tag important este "main" acesta conținând datele încărcate dinamic </p>
    <h3>Webografie<h3>
    <a href="https://www.w3schools.com">w3schools</a>
    <a href="https://stackoverflow.com">stackoverflow</a>
    
    `,

    };

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); 
            const contentId = this.getAttribute('data-content');
            const content = contentData[contentId];
            if (content) {
                contentSection.innerHTML = content;
                Prism.highlightAll(); 
            }
        });
    });

    
    contentSection.innerHTML = contentData.home;
    Prism.highlightAll();
});
