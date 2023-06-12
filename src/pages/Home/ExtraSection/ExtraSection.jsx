import SectionTitle from "../../../components/SectionTitle";

const ExtraSection = () => {

    const sponsored = [
        'https://1000logos.net/wp-content/uploads/2017/02/Harvard-Logo-Meaning-history.jpg',
        'https://callforcurators.com/wp-content/uploads/2022/01/university-of-cambridge-logo-3.png',
        'https://upload.wikimedia.org/wikipedia/en/0/05/Adamas_University_Logo.png',
        'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Jadavpur_University_Logo.svg/1200px-Jadavpur_University_Logo.svg.png'
    ]

    return (
        <div className="my-10">
            <SectionTitle heading='Our Top Partners' />
            <div className='md:px-20 px-3 mt-10 grid grid-cols-4 md:gap-0 gap-3 items-center'>

                {
                    sponsored.map((v, i) => {

                        return (
                            <div key={i} >
                                <img className='h-20 w-40 object-contain object-center mx-auto' src={v} alt="" />
                            </div>
                        )
                    })
                }

            </div>

        </div>
    );
};

export default ExtraSection;