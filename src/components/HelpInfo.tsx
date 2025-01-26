const HelpInfo = () => {
    const hints:string[] = [
        '-Выбрать дату и смену, указать шабат это или нет',
        '-Ввести сумму чаевых',
        '-Выбрать сотрудников, присутствовавших на смене',
        '-Указать количество часов работы для каждого из сотрудников',
        '-Указать спешелы, если требуется',
    ]
    return (
        <div className={'ml-6'}>
            <h2 className={'font-bold'}>От вас требуется:</h2>
            {hints.map((hint,idx) => <h3 className={'font-medium'} key={idx}>{hint}</h3>)}
        </div>
    );
};

export default HelpInfo;