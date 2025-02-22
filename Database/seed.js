import { db } from "./db.js";

const users = [
    {
        email: "daniel@email.com",
        password: "teste",
        level: 1
    }
]

const postagens = [
    {
        id: 10001,
        img: "../Assets/index/posts/street.jpg",
        titulo: "Contratações de profissionais falantes de inglês cresce em 2024.",
        resumo: "A fluência na língua inglesa está se tornando um dos mais valiosos diferenciais para profissionais no Brasil, especialmente aqueles em estágios iniciais de suas carreiras.",
        link: "Pages/Postagem10001.html",
        conteudo: JSON.stringify([
            {tipo: "h1", texto: "O mercado de desenvolvimento de software anda mais seleto e cada vez mais exige proficiência em inglês"},
            {tipo:"p", texto: "A fluência na língua inglesa está se tornando um dos mais valiosos diferenciais para profissionais no Brasil, especialmente aqueles em estágios iniciais de suas carreiras. Diversos estudos e levantamentos apontam que brasileiros fluentes em inglês podem ganhar mais que o dobro em relação àqueles que não dominam o idioma. Essa realidade reflete a crescente demanda por competências globais em um mercado de trabalho cada vez mais conectado."},
            {tipo:"h2", texto: "A importância do inglês no mercado de trabalho"},
            {tipo:"p", texto: "A globalização transformou o inglês em uma competência básica para muitas áreas profissionais. Setores como tecnologia, negócios, turismo e saúde frequentemente exigem interações com parceiros internacionais, leitura de documentações técnicas e participação em conferências globais. Além disso, grandes empresas multinacionais instaladas no Brasil tendem a priorizar a contratação de profissionais que possuam capacidade de comunicação em inglês. Essa habilidade não só facilita a interação em um ambiente corporativo multicultural, mas também reflete a capacidade do profissional de lidar com desafios complexos e aprender continuamente – características essenciais em um mundo laboral em constante evolução."},
            {tipo:"h2", texto: "A diferença salarial"},
            {tipo: "p", texto: "Dados de pesquisas salariais revelam que profissionais fluentes em inglês frequentemente conquistam remunerações iniciais significativamente mais altas do que seus pares sem essa competência. Em cargos técnicos e analíticos, a diferença pode variar entre 30% e 100%, enquanto em posições de liderança ou em empresas que exigem alto nível de interação internacional, esse percentual pode ser ainda maior. O motivo para essa discrepância salarial está diretamente ligado ao valor que a fluência agrega às organizações. Um profissional capaz de negociar com fornecedores estrangeiros, participar de treinamentos internacionais ou atuar como ponto de contato entre filiais de diferentes países reduz custos e aumenta a eficácia operacional das empresas."},
            {tipo: "h2", texto: "Acesso a melhores oportunidades"},
            {tipo: "p", texto: "A fluência em inglês não apenas eleva o potencial salarial, mas também amplia o acesso a oportunidades de desenvolvimento profissional. Programas de intercâmbio, cursos de especialização e posições em empresas globais são mais acessíveis para aqueles que dominam o idioma. Isso cria um ciclo virtuoso: quanto mais oportunidades um profissional tem, mais ele se qualifica, aumentando suas chances de progredir na carreira."},
            {tipo: "h2", texto: "Como conquistar a fluência"},
            {tipo: "p", texto: "Embora a fluência em inglês ainda seja uma barreira para muitos brasileiros devido ao alto custo de cursos ou falta de acesso à educação de qualidade, alternativas gratuitas ou acessíveis têm surgido nos últimos anos. Plataformas online, aplicações de aprendizado e comunidades de prática de idiomas oferecem caminhos viáveis para o desenvolvimento dessa habilidade. Ademais, programas governamentais e iniciativas de organizações não governamentais têm contribuído para democratizar o acesso ao ensino de inglês, preparando mais brasileiros para competir no mercado global."},
            {tipo: "h2", texto: "Conclusão"},
            {tipo: "p", texto: "A fluência em inglês deixou de ser um diferencial opcional e passou a ser uma competência essencial para profissionais que desejam se destacar em suas áreas. Além de possibilitar remunerações mais altas, ela abre portas para oportunidades que podem transformar a trajetória profissional. Investir no aprendizado do idioma é, portanto, uma decisão estratégica para aqueles que almejam sucesso no competitivo mercado de trabalho atual."}
            
        ])
    },
    {
        id: 10002,
        img: "../Assets/index/posts/computer.png",
        titulo:  "O mercado de desenvolvimento de software anda mais seleto e cada vez mais exige proficiência em inglês.",
        resumo: "No dinâmico e competitivo universo do desenvolvimento de software, a proficiência em inglês deixou de ser apenas um diferencial e tornou-se uma exigência fundamental.",
        link: "Pages/Postagem10002.html",
        conteudo: JSON.stringify([
            {tipo: "h1", texto: "O mercado de desenvolvimento de software anda mais seleto e cada vez mais exige proficiência em inglês"},
            {tipo: "p", texto: "No dinâmico e competitivo universo do desenvolvimento de software, a proficiência em inglês deixou de ser apenas um diferencial e tornou-se uma exigência fundamental. As demandas do setor, cada vez mais globalizado, têm transformado o inglês em uma competência obrigatória para os profissionais que desejam se destacar e acessar as melhores oportunidades."},
            {tipo: "h2", texto: "A globalização do mercado de software"},
            {tipo: "p", texto: "A indústria de tecnologia e desenvolvimento de software é, por natureza, global. Grandes empresas como Google, Microsoft, Amazon e muitas outras multinacionais possuem equipes distribuídas por diversos países, que necessitam de um idioma comum para se comunicar. O inglês, como língua universal da tecnologia, é a ferramenta que possibilita essa interação. Além disso, a maioria da documentação técnica, bibliotecas de códigos, cursos e tutoriais está disponível predominantemente em inglês. Profissionais que dominam o idioma têm acesso facilitado a esses materiais, permitindo-lhes aprender novas tecnologias e soluções com mais agilidade."},
            {tipo: "h2", texto: "A seleção cada vez mais exigente"},
            {tipo: "p", texto: "O mercado de desenvolvimento de software enfrenta uma combinação de alta demanda e busca por qualidade. Empresas não querem apenas desenvolvedores habilidosos em códigos, mas também profissionais capazes de se comunicar de forma eficaz com equipes internacionais, entender instruções complexas e participar de reuniões e negociações em inglês. Essa exigência tem feito com que muitos recrutadores priorizem candidatos que demonstrem fluência no idioma, além de competências técnicas. Essa fluência é frequentemente avaliada em entrevistas, testes ou durante a dinâmica de equipe."},
            {tipo: "h2", texto: "Como desenvolver a profeiciência em inglês"},
            {tipo: "p", texto: "Para os profissionais que ainda não dominam o idioma, investir no aprendizado de inglês é uma medida essencial. Algumas dicas incluem: Estudo constante: Utilize plataformas online como Duolingo, Memrise ou cursos voltados para profissionais de tecnologia. Imersão: Leia documentações e assista a tutoriais em inglês, mesmo que inicialmente com legendas. Prática ativa: Participe de comunidades internacionais no GitHub, Stack Overflow ou outras redes profissionais. Interação social: Engaje-se em conversas com falantes nativos ou em grupos de estudo."},
            {tipo: "h2", texto: "Conclusão"},
            {tipo: "p", texto: "O mercado de desenvolvimento de software está mais exigente e seletivo do que nunca. A proficiência em inglês não é apenas uma forma de se diferenciar, mas uma habilidade essencial para se manter competitivo e conquistar as melhores posições. Investir no aprendizado do idioma é uma decisão estratégica para desenvolvedores que buscam maximizar seu potencial em um setor tão dinâmico quanto o de tecnologia."}
        ])
    }
];

for (let i = 0; i < users.length; i++) {
    await db.run(`
        INSERT INTO users (email, password, level)
        VALUES (?, ?, ?)`, [
            users[i].email,
            users[i].password,
            users[i].level
        ]
    )
}

for (let x = 0; x < postagens.length; x++) {
    await db.run(`
        INSERT INTO posts (id, img, titulo, resumo, link, conteudo)
        VALUES (?, ?, ?, ?, ?, ?)`, [
            postagens[x].id,
            postagens[x].img,
            postagens[x].titulo,
            postagens[x].resumo,
            postagens[x].link,
            postagens[x].conteudo
        ]
    )
}