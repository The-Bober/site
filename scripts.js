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

int main() {
    int numar;
    cout << "Introduceți un număr: ";
    cin >> numar;
    cout << "Suma cifrelor este: " << sumaCifrelor(numar) << endl;
    return 0;
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

int main() {
    int numar;
    cout << "Introduceți un număr: ";
    cin >> numar;
    afisareDivizori(numar);
    return 0;
}
    </code></pre>`,
    interschimbare: `<h3>Interschimbarea a două variabile</h3><p>Descriere și cod pentru interschimbarea a două variabile:</p>
    <pre><code class="language-cpp">
#include <iostream>
using namespace std;

void interschimba(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int x, y;
    cout << "Introduceți două numere: ";
    cin >> x >> y;
    interschimba(x, y);
    cout << "După interschimbare: x = " << x << ", y = " << y << endl;
    return 0;
}
    </code></pre>`,
    cmmdc: `<h3>CMMDC și CMMMC</h3><p>Descriere și cod pentru calcularea CMMDC și CMMMC:</p>
    <pre><code class="language-cpp">
#include <iostream>
using namespace std;

int cmmdc(int a, int b) {
    while (b != 0) {
        int r = a % b;
        a = b;
        b = r;
    }
    return a;
}

int cmmmc(int a, int b) {
    return a * b / cmmdc(a, b);
}

int main() {
    int x, y;
    cout << "Introduceți două numere: ";
    cin >> x >> y;
    cout << "CMMDC: " << cmmdc(x, y) << endl;
    cout << "CMMMC: " << cmmmc(x, y) << endl;
    return 0;
}
    </code></pre>`,
    factori: `<h3>Descompunerea în factori primi</h3><p>Descriere și cod pentru descompunerea în factori primi:</p>
    <pre><code class="language-cpp">
#include <iostream>
using namespace std;

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

int main() {
    int numar;
    cout << "Introduceți un număr: ";
    cin >> numar;
    factoriPrimi(numar);
    return 0;
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

int main() {
    int numar;
    cout << "Introduceți numărul de termeni: ";
    cin >> numar;
    fibonacci(numar);
    return 0;
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
#include <iostream>
using namespace std;

void gasesteMaxMin(int v[], int n, int &max, int &min) {
    max = min = v[0];
    for (int i = 1; i < n; i++) {
        if (v[i] > max) max = v[i];
        if (v[i] < min) min = v[i];
    }
}

int main() {
    int n;
    cout << "Introduceți dimensiunea vectorului: ";
    cin >> n;
    int v[n], max, min;
    cout << "Introduceți elementele vectorului: ";
    for (int i = 0; i < n; i++) {
        cin >> v[i];
    }
    gasesteMaxMin(v, n, max, min);
    cout << "Maximul este: " << max << ", Minimul este: " << min << endl;
    return 0;
}
    </code></pre>`,
    sumeproduse: `<h3>Sume și produse</h3><p>Descriere și cod pentru calcularea sumelor și produselor elementelor unui vector:</p>
    <pre><code class="language-cpp">
#include <iostream>
using namespace std;

void sumeProduse(int v[], int n, int &suma, int &produs) {
    suma = 0;
    produs = 1;
    for (int i = 0; i < n; i++) {
        suma += v[i];
        produs *= v[i];
    }
}

int main() {
    int n;
    cout << "Introduceți dimensiunea vectorului: ";
    cin >> n;
    int v[n], suma, produs;
    cout << "Introduceți elementele vectorului: ";
    for (int i = 0; i < n; i++) {
        cin >> v[i];
    }
    sumeProduse(v, n, suma, produs);
    cout << "Suma este: " << suma << ", Produsul este: " << produs << endl;
    return 0;
}
    </code></pre>`,
    perechi: `<h3>Perechi de elemente în vector</h3><p>Descriere și cod pentru identificarea perechilor de elemente într-un vector:</p>
    <pre><code class="language-cpp">
#include <iostream>
using namespace std;

void afisarePerechi(int v[], int n) {
    cout << "Perechi de elemente din vector: " << endl;
    for (int i = 0; i < n - 1; i++) {
        for (int j = i + 1; j < n; j++) {
            cout << "(" << v[i] << ", " << v[j] << ")" << endl;
        }
    }
}

int main() {
    int n;
    cout << "Introduceți dimensiunea vectorului: ";
    cin >> n;
    int v[n];
    cout << "Introduceți elementele vectorului: ";
    for (int i = 0; i < n; i++) {
        cin >> v[i];
    }
    afisarePerechi(v, n);
    return 0;
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
#include <iostream>
using namespace std;

void afisareChenar(int mat[][100], int m, int n) {
    cout << "Chenarul matricei este: " << endl;
    for (int j = 0; j < n; j++) {
        cout << mat[0][j] << " ";
    }
    for (int i = 1; i < m - 1; i++) {
        cout << mat[i][n-1] << " ";
    }
    for (int j = n - 1; j >= 0; j--) {
        cout << mat[m-1][j] << " ";
    }
    for (int i = m - 2; i > 0; i--) {
        cout << mat[i][0] << " ";
    }
    cout << endl;
}

int main() {
    int m, n;
    cout << "Introduceți numărul de linii și coloane: ";
    cin >> m >> n;
    int mat[100][100];
    cout << "Introduceți elementele matricei: " << endl;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            cin >> mat[i][j];
        }
    }
    afisareChenar(mat, m, n);
    return 0;
}
    </code></pre>`,
    maxminmatrice: `<h3>Maximul/minimul dintr-o matrice</h3><p>Descriere și cod pentru găsirea valorilor maxime și minime într-o matrice:</p>
    <pre><code class="language-cpp">
#include <iostream>
using namespace std;

void gasesteMaxMinMatrice(int mat[][100], int m, int n, int &max, int &min) {
    max = min = mat[0][0];
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (mat[i][j] > max) max = mat[i][j];
            if (mat[i][j] < min) min = mat[i][j];
        }
    }
}

int main() {
    int m, n, max, min;
    cout << "Introduceți numărul de linii și coloane: ";
    cin >> m >> n;
    int mat[100][100];
    cout << "Introduceți elementele matricei: " << endl;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            cin >> mat[i][j];
        }
    }
    gasesteMaxMinMatrice(mat, m, n, max, min);
    cout << "Maximul este: " << max << ", Minimul este: " << min << endl;
    return 0;
}
    </code></pre>`,
    sumaimpare: `<h3>Suma elementelor impare pe linia K</h3><p>Descriere și cod pentru calcularea sumei elementelor impare pe o anumită linie a unei matrici:</p>
    <pre><code class="language-cpp">
#include <iostream>
using namespace std;

int sumaImpareLinieK(int mat[][100], int n, int k) {
    int suma = 0;
    for (int j = 0; j < n; j++) {
        if (mat[k][j] % 2 != 0) {
            suma += mat[k][j];
        }
    }
    return suma;
}

int main() {
    int m, n, k;
    cout << "Introduceți numărul de linii și coloane: ";
    cin >> m >> n;
    int mat[100][100];
    cout << "Introduceți elementele matricei: " << endl;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            cin >> mat[i][j];
        }
    }
    cout << "Introduceți linia K: ";
    cin >> k;
    cout << "Suma elementelor impare pe linia " << k << " este: " << sumaImpareLinieK(mat, n, k) << endl;
    return 0;
}
    </code></pre>`,
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
