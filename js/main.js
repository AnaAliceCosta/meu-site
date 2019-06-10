const calculaIdade = ()=>{
    const dataAtual = new Date()
    const dataNascimento = new Date('1986','01','02')
    let idade = dataAtual.getFullYear() - dataNascimento.getFullYear()
    dataAtual.getMonth() == 1? idade : idade--
    return idade;
}
