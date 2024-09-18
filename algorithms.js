const algorithms = [
    {
      category: "Algoritmi Elementari",
      subsections: [
        {
          subsection: "Prelucrarea cifrelor unui număr",
          items: [
            {
              name: "Suma Cifrelor",
              description: "Suma cifrelor unui număr",
              code: `
  while(n)
  {
    s=n%10;
    n/=10;
  }
  `
            },
            {
              name: "Cifra Maximă",
              description: "Cifra Maximă dintr-un număr",
              code: `
  while(n)
  {
    uc=n/10;
    if(uc>maxi)maxi=uc;
  }            
  `
            },
            {
              name: "Oglinditul",
              description: "Oglindirea unui număr",
              code: `
  int oglinda = 0;
  while(n)
  {
    oglinda = oglinda * 10 + n % 10;
    n /= 10;
  }
  `
            },
            {
              name: "Prima Cifră",
              description: "Determinarea primei cifre a unui număr",
              code: `
  while(n >= 10)
  {
    n /= 10;
  }
  `
            },
            {
              name: "Eliminarea Cifrelor Impare",
              description: "Eliminarea cifrelor impare dintr-un număr",
              code: `
  while(n)
  {
    uc = n % 10;
    if(uc % 2 == 0)
    {
      rezultat += cifra * putere;
      putere *= 10;
    }
    n /= 10;
  }
  `
            },
            {
              name: "Dublarea Cifrelor Pare",
              description: "Dublarea cifrelor pare dintr-un număr",
              code: `
  while(n)
  {
    uc = n % 10;
    if(uc % 2 == 0)
    {
      uc *= 2;
    }
    rezultat += cifra * putere;
    putere *= 10;
    n /= 10;
  }
  `
            }
          ]
        },
        {
          subsection: "Divizorii unui număr. Verificare număr prim",
          items: [
            {
              name: "Afișarea Divizorilor",
              description: "Afișarea divizorilor unui număr",
              code: `
  for(d = 1; d*d <= n; d++)
  {
    if(n % d == 0)
    {
      cout << d << " ";
    }
  }
  `
            },
            {
              name: "Câți Divizori Are un Număr",
              description: "Determinarea numărului de divizori ai unui număr",
              code: `
  for(d = 1; d*d <= n; d++)
  {
    if(n % d == 0)
    {
      contor++;
    }
  }
  cout << contor;
  `
            },
            {
              name: "Verificare Numar Prim",
              description: "Verificarea dacă un număr este prim",
              code: `
  bool isPrime = true;
  if(n < 2)
  {
    isPrime = false;
  }
  for(int i = 2; i <= sqrt(n); i++)
  {
    if(n % i == 0)
    {
      isPrime = false;
      break;
    }
  }
  `
            }
          ]
        },
        {
          subsection: "Interschimbarea a două variabile",
          items: [
            {
              name: "Interschimbarea clasică",
              description: "Interschimbarea a două variabile folosind o variabilă auxiliară",
              code: `
  int temp = a;
  a = b;
  b = temp;
  `
            },
            {
              name: "Interschimbarea fără variabilă auxiliară",
              description: "Interschimbarea a două variabile fără variabilă auxiliară",
              code: `
  a = a + b;
  b = a - b;
  a = a - b;
  `
            }
          ]
        },
        {
          subsection: "CMMDC și CMMMC",
          items: [
            {
              name: "CMMDC prin împărțiri",
              description: "Calcularea CMMDC prin metoda împărțirilor",
              code: `
  while(b != 0)
  {
    int r = a % b;
    a = b;
    b = r;
  }
  cout << "CMMDC: " << a;
  `
            },
            {
              name: "CMMDC prin scăderi",
              description: "Calcularea CMMDC prin metoda scăderilor",
              code: `
  while(a != b)
  {
    if(a > b)
    {
      a = a - b;
    }
    else
    {
      b = b - a;
    }
  }
  cout << "CMMDC: " << a;
  `
            },
            {
              name: "CMMMC",
              description: "Calcularea CMMMC folosind CMMDC",
              code: `
  int cmmdc = a;
  int b_original = b;
  while(b != 0)
  {
    int r = a % b;
    a = b;
    b = r;
  }
  int cmmmc = (a * b_original) / cmmdc;
  cout << "CMMMC: " << cmmmc;
  `
            }
          ]
        },
        {
          subsection: "Descompunerea în factori primi",
          items: [
            {
              name: "Descompunerea în factori primi",
              description: "Descompunerea unui număr în factori primi",
              code: `
  for(int d = 2; d <= n / 2; d++)
  {
    while(n % d == 0)
    {
      cout << d << " ";
      n /= d;
    }
  }
  if(n > 1)
  {
    cout << n;
  }
  `
            }
          ]
        },
        {
          subsection: "Șirul Fibonacci",
          items: [
            {
              name: "Afișarea primelor n termeni",
              description: "Afișarea primelor n termeni ai șirului Fibonacci",
              code: `
  int a = 0, b = 1;
  cout << a << " " << b << " ";
  for(int i = 3; i <= n; i++)
  {
    int c = a + b;
    cout << c << " ";
    a = b;
    b = c;
  }
  `
            },
            {
              name: "Afișarea primelor n termeni impari",
              description: "Afișarea primelor n termeni impari ai șirului Fibonacci",
              code: `
  int count = 0, a = 0, b = 1;
  while(count < n)
  {
    int c = a + b;
    if(c % 2 != 0)
    {
      cout << c << " ";
      count++;
    }
    a = b;
    b = c;
  }
  `
            },
            {
              name: "Verificarea dacă un număr face parte din șir",
              description: "Verificarea dacă un număr face parte din șirul Fibonacci",
              code: `
  int a = 0, b = 1;
  bool found = false;
  while(a <= n)
  {
    if(a == n)
    {
      found = true;
      break;
    }
    int c = a + b;
    a = b;
    b = c;
  }
  cout << (found ? "Face parte din șir" : "Nu face parte din șir");
  `
            }
          ]
        },
        {
          subsection: "Trecerea unui număr dintr-o bază în alta",
          items: [
            {
              name: "Trecerea unui număr din baza 10 în baza 2",
              description: "Convertirea unui număr din baza 10 în baza 2",
              code: `
  while(nr != 0)
  {
    int rest = nr % 2; // 2 este baza in care vrem sa convertim
    rezultat = rezultat + rest * putere;
    putere = putere * 10;
    nr = nr / 2;
  }
  `
            },
            {
              name: "Trecerea unui număr din baza 2 în baza 10",
              description: "Convertirea unui număr din baza 2 în baza 10",
              code: `
  int baza10 = 0, putere = 1;
  while(n > 0)
  {
    baza10 += (n % 10) * putere;
    n /= 10;
    putere *= 2;
  }
  cout << baza10;
  `
            }
          ]
        }
      ]
    },
    {
      category: "Vectori",
      subsections: [
        {
          subsection: "Declararea.Citirea.Afișarea",
          items: [
            {
              name: "Declararea unui vector",
              description: "Cum se declară un vector în C++",
              code: `
  int v[100];
  `
            },
            {
              name: "Citirea elementelor unui vector",
              description: "Cum se citesc elementele unui vector",
              code: `
  for(int i = 0; i < n; i++)
  {
    cin >> v[i];
  }
  `
            },
            {
              name: "Afișarea elementelor unui vector",
              description: "Cum se afișează elementele unui vector",
              code: `
  for(int i = 0; i < n; i++)
  {
    cout << v[i] << " ";
  }
  `
            }
          ]
        },
        {
          subsection: "Maximul și minimul în vector",
          items: [
            {
              name: "Calcul minim și maxim simultan",
              description: "Calcularea simultană a minimului și maximului într-un vector",
              code: `
  int mini = v[0], maxi = v[0];
  for(int i = 1; i < n; i++)
  {
    if(v[i] < mini) mini = v[i];
    if(v[i] > maxi) maxi = v[i];
  }
  `
            },
            {
              name: "Minimul și de câte ori apare",
              description: "Determinarea minimului și de câte ori apare într-un vector",
              code: `
  int mini=v[0];
  for(i=1;i<=n;i++)
    if(v[i]<mini)mini=v[i];
  for(i=1;i<=n;i++)
    if(v[i]==mini)c++;
  `
            },
            {
              name: "Elemente între minim și maxim",
              description: "Determinarea elementelor între valorile minime și maxime într-un vector",
              code: `
  int mini = v[0], maxi = v[0];
  int posmini,posmaxi;
  for(int i = 1; i < n; i++)
  {
    if(v[i] < min)
      {
        min = v[i];
        posmini=i;
      }
    if(v[i] > max) 
      {
        max = v[i];
        posmaxi=i;
      }
  }
  if(posmaxi>posmini)cout<<posmaxi-posmini;
  else cout<<posmini-posmaxi;
  `
            }
          ]
        },
        {
          subsection: "Sume și produse",
          items: [
            {
              name: "Suma elementelor prime",
              description: "Calcularea sumei elementelor prime dintr-un vector",
              code: `
  int suma = 0;
  for(int i = 0; i < n; i++)
  {
    bool prim = true;
    if(v[i] < 2) prim = false;
    for(int j = 2; j*j <= v[i]; j++)
    {
      if(v[i] % j == 0)
      {
        prim = false;
        break;
      }
    }
    if(prim)
    {
      suma += v[i];
    }
  }
  `
            },
            {
              name: "Produsul elementelor din prima jumătate",
              description: "Calcularea produsului elementelor din prima jumătate a vectorului",
              code: `
  int produs = 1;
  for(int i = 0; i < n / 2; i++)
  {
    produs *= v[i];
  }
  `
            },
            {
              name: "Suma elementelor din a doua jumătate",
              description: "Calcularea sumei elementelor din a doua jumătate a vectorului",
              code: `
  int suma = 0;
  for(int i = n / 2; i < n; i++)
  {
    suma += v[i];
  }
  `
            },
            {
              name: "Suma elementelor divizibile cu primul element",
              description: "Calcularea sumei elementelor divizibile cu primul element al vectorului",
              code: `
  for(int i = 1; i < n; i++)
  {
    if(v[i] % v[0] == 0)
    {
      suma += v[i];
    }
  }
  `
            },
            {
              name: "Produsul elementelor din intervalul determinat de primul și ultimul element",
              description: "Calcularea produsului elementelor situate între primul și ultimul element din vector",
              code: `
  int produs = 1;
  for(int i = v[0]; i <= v[n-1]; i++)
  {
    produs *= v[i];
  }
  `
            },
            {
              name: "Suma elementelor care au suma cifrelor pară",
              description: "Calcularea sumei elementelor care au suma cifrelor pară",
              code: `
  int suma = 0;
  for(int i = 0; i < n; i++)
  {
    int num = v[i], sum_cifre = 0;
    while(num)
    {
      sum_cifre += num % 10;
      num /= 10;
    }
    if(sum_cifre % 2 == 0)
    {
      suma += v[i];
    }
  }
  `
            }
          ]
        },
        {
          subsection: "Perechi de elemente în vector",
          items: [
            {
              name: "Perechi alăturate",
              description: "Determinarea perechilor alăturate dintr-un vector",
              code: `
  for(int i = 0; i < n - 1; i++)
  {
    cout << "(" << v[i] << ", " << v[i+1] << ") ";
  }
  `
            },
            {
              name: "Toate perechile posibile",
              description: "Determinarea tuturor perechilor posibile dintr-un vector",
              code: `
  for(int i = 0; i < n; i++)
  {
    for(int j = i + 1; j < n; j++)
    {
      cout << "(" << v[i] << ", " << v[j] << ") ";
    }
    cout<<endl;
  }
  `
            }
          ]
        },
        {
          subsection: "Ordonarea unui vector",
          items: [
            {
              name: "Bubble-sort crescător",
              description: "Ordonarea unui vector crescător folosind Bubble-sort",
              code: `
  for(int i = 0; i < n-1; i++)
  {
    for(int j = 0; j < n-i-1; j++)
    {
      if(v[j] > v[j+1])
      {
        int temp = v[j];
        v[j] = v[j+1];
        v[j+1] = temp;
      }
    }
  }
  `
            },
            {
              name: "Bubble-sort descrescător",
              description: "Ordonarea unui vector descrescător folosind Bubble-sort",
              code: `
  for(int i = 0; i < n-1; i++)
  {
    for(int j = 0; j < n-i-1; j++)
    {
      if(v[j] < v[j+1])
      {
        int temp = v[j];
        v[j] = v[j+1];
        v[j+1] = temp;
      }
    }
  }
  `
            },
            {
              name: "Selecție directă crescător",
              description: "Ordonarea unui vector crescător folosind Selecție directă",
              code: `
  for(int i = 0; i < n-1; i++)
  {
    int min_idx = i;
    for(int j = i+1; j < n; j++)
    {
      if(v[j] < v[min_idx])
      {
        min_idx = j;
      }
    }
    int temp = v[min_idx];
    v[min_idx] = v[i];
    v[i] = temp;
  }
  `
            },
            {
              name: "Selecție directă descrescător",
              description: "Ordonarea unui vector descrescător folosind Selecție directă",
              code: `
  for(int i = 0; i < n-1; i++)
  {
    int max_idx = i;
    for(int j = i+1; j < n; j++)
    {
      if(v[j] > v[max_idx])
      {
        max_idx = j;
      }
    }
    int temp = v[max_idx];
    v[max_idx] = v[i];
    v[i] = temp;
  }
  `
            }
          ]
        },
        {
          subsection: "Interclasarea a doi vectori",
          items: [
            {
              name: "Interclasarea a doi vectori",
              description: "Interclasarea a doi vectori ordonați într-un vector ordonat",
              code: `
  int i = 0, j = 0, k = 0;
  while(i < n && j < m)
  {
    if(v1[i] < v2[j])
    {
      v3[k++] = v1[i++];
    }
    else
    {
      v3[k++] = v2[j++];
    }
  }
  while(i < n)
  {
    v3[k++] = v1[i++];
  }
  while(j < m)
  {
    v3[k++] = v2[j++];
  }
  `
            }
          ]
        },
        {
          subsection: "Ștergerea / inserarea elementului de pe o poziție oarecare k",
          items: [
            {
              name: "Ștergerea unui element de pe poziția k",
              description: "Ștergerea unui element de pe o poziție oarecare k din vector",
              code: `
  for(int i = k; i < n-1; i++)
  {
    v[i] = v[i+1];
  }
  n--;
  `
            },
            {
              name: "Inserarea unui element pe poziția k",
              description: "Inserarea unui element pe o poziție oarecare k în vector",
              code: `
  for(int i = n; i > k; i--)
  {
    v[i] = v[i-1];
  }
  v[k] = elem;
  n++;
  `
            }
          ]
        },
        {
          subsection: "Construirea unui vector din alt vector",
          items: [
            {
              name: "Inversarea unui vector în alt vector",
              description: "Inversarea unui vector și stocarea în alt vector",
              code: `
  for(int i = 0; i < n; i++)
  {
    v_inv[i] = v[n-i-1];
  }
  `
            }
          ]
        },
        {
          subsection: "Cea mai lungă secvență crescătoare",
          items: [
            {
              name: "Cea mai lungă secvență crescătoare",
              description: "Determinarea celei mai lungi secvențe crescătoare dintr-un vector",
              code: `
  int max_len = 1, current_len = 1;
  for(int i = 1; i < n; i++)
  {
    if(v[i] > v[i-1])
    {
      current_len++;
    }
    else
    {
      if(current_len > max_len)
      {
        max_len = current_len;
      }
      current_len = 1;
    }
  }
  if(current_len > max_len)
  {
    max_len = current_len;
  }
  cout << "Cea mai lungă secvență crescătoare: " << max_len;
  `
            }
          ]
        },
        {
          subsection: "Vectori de frecvență",
          items: [
            {
              name: "Vectori de frecvență",
              description: "Construirea unui vector de frecvență pentru elementele dintr-un vector",
              code: `
  int freq[100] = {0};
  for(int i = 0; i < n; i++)
  {
    freq[v[i]]++;
  }
  for(int i = 0; i < 100; i++)
  {
    if(freq[i] > 0)
    {
      cout << i << ": " << freq[i] << " ";
    }
  }
  `
            }
          ]
        }
      ]
    },
    {
      category: "Matrici",
      subsections: [
        {
          subsection: "Declarare.Citire.Afișare",
          items: [
            {
              name: "Declararea unei matrice",
              description: "Cum se declară o matrice în C++",
              code: `
  int mat[100][100];
  `
            },
            {
              name: "Citirea elementelor unei matrice",
              description: "Cum se citesc elementele unei matrice",
              code: `
  for(int i = 0; i < n; i++)
  {
    for(int j = 0; j < m; j++)
    {
      cin >> mat[i][j];
    }
  }
  `
            },
            {
              name: "Afișarea elementelor unei matrice",
              description: "Cum se afișează elementele unei matrice",
              code: `
  for(int i = 0; i < n; i++)
  {
    for(int j = 0; j < m; j++)
    {
      cout << mat[i][j] << " ";
    }
    cout << endl;
  }
  `
            }
          ]
        },
        {
          subsection: "Chenarul unei matrice (afișare)",
          items: [
            {
              name: "Afișarea chenarului unei matrice",
              description: "Cum se afișează chenarul unei matrice",
              code: `
  for(int i = 0; i < n; i++)
  {
    for(int j = 0; j < m; j++)
    {
      if(i == 0 || i == n-1 || j == 0 || j == m-1)
      {
        cout << mat[i][j] << " ";
      }
      else
      {
        cout << "  ";
      }
    }
    cout << endl;
  }
  `
            }
          ]
        },
        {
          subsection: "Maximul/minimul dintr-o matrice",
          items: [
            {
              name: "Maximul dintr-o matrice",
              description: "Determinarea maximului dintr-o matrice",
              code: `
  int max = mat[0][0];
  for(int i = 0; i < n; i++)
  {
    for(int j = 0; j < m; j++)
    {
      if(mat[i][j] > max)
      {
        max = mat[i][j];
      }
    }
  }
  `
            },
            {
              name: "Minimul dintr-o matrice",
              description: "Determinarea minimului dintr-o matrice",
              code: `
  int min = mat[0][0];
  for(int i = 0; i < n; i++)
  {
    for(int j = 0; j < m; j++)
    {
      if(mat[i][j] < min)
      {
        min = mat[i][j];
      }
    }
  }
  `
            }
          ]
        },
        {
          subsection: "Suma / produsul / minimul / câte elemente impare pe linia K",
          items: [
            {
              name: "Suma elementelor pe linia K",
              description: "Calcularea sumei elementelor pe linia K dintr-o matrice",
              code: `
  int suma = 0;
  for(int j = 0; j < m; j++)
  {
    suma += mat[K][j];
  }
  `
            },
            {
              name: "Produsul elementelor pe linia K",
              description: "Calcularea produsului elementelor pe linia K dintr-o matrice",
              code: `
  int produs = 1;
  for(int j = 0; j < m; j++)
  {
    produs *= mat[K][j];
  }
  `
            },
            {
              name: "Minimul elementelor pe linia K",
              description: "Determinarea minimului elementelor pe linia K dintr-o matrice",
              code: `
  int min = mat[K][0];
  for(int j = 1; j < m; j++)
  {
    if(mat[K][j] < min)
    {
      min = mat[K][j];
    }
  }
  `
            },
            {
              name: "Numărul de elemente impare pe linia K",
              description: "Determinarea numărului de elemente impare pe linia K dintr-o matrice",
              code: `
  int count = 0;
  for(int j = 0; j < m; j++)
  {
    if(mat[K][j] % 2 != 0)
    {
      count++;
    }
  }
  `
            }
          ]
        },
        {
          subsection: "Condiții pe diagonale în matricile pătratice și condiții pe zone (nord, sud, est, vest)",
          items: [
            {
              name: "Condiții pe diagonala principală",
              description: "Verificarea condițiilor pe diagonala principală a unei matrice pătratice",
              code: `
  for(int i = 0; i < n; i++)
  { 
    for(j=1;j<=n;j++)
    if(i==j) // <-conditia
    {
      //cod
    }
  }
  `
            },
            {
              name: "Condiții pe diagonala secundară",
              description: "Verificarea condițiilor pe diagonala secundară a unei matrice pătratice",
              code: `
  for(int i = 0; i < n; i++)
  { 
    for(j=1;j<=n;j++)
    if(i+j==n-1) // <-conditia
    {
      //cod
    }
  }
  `
            },
            {
              name: "Condiții pe zona nord",
              description: "Verificarea condițiilor pe zona nord a unei matrice",
              code: `
  for(int i = 0; i < n; i++)
  { 
    for(j=1;j<=n;j++)
    if(i<j && i+j<n-1) // <-conditia
    {
      //cod
    }
  }
  `
            },
            {
              name: "Condiții pe zona sud",
              description: "Verificarea condițiilor pe zona sud a unei matrice",
              code: `
  for(int i = 0; i < n; i++)
  { 
    for(j=1;j<=n;j++)
    if(i>j && i+j>n-1) // <-conditia
    {
      //cod
    }
  }
  `
            },
            {
              name: "Condiții pe zona est",
              description: "Verificarea condițiilor pe zona est a unei matrice",
              code: `
  for(int i = 0; i < n; i++)
  { 
    for(j=1;j<=n;j++)
    if(i<j && i+j>n-1) // <-conditia
    {
      //cod
    }
  }
  `
            },
            {
              name: "Condiții pe zona vest",
              description: "Verificarea condițiilor pe zona vest a unei matrice",
              code: `
  for(int i = 0; i < n; i++)
  { 
    for(j=1;j<=n;j++)
    if(i>j && i+j<n-1) // <-conditia
    {
      //cod
    }
  }
  `
            }
          ]
        }
      ]
    }
  ];
  export default algorithms;