function ForeignLanguages(country) {
    switch (country) {
        case 'England':
        case 'USA':
            console.log('English');
            break;
        case 'Spain':
            case 'Mexico':
                case 'Argentina':
                    console.log('Spanish');
                    break;
                    default:
                        console.log('unknown');
                        break;

    }
}

ForeignLanguages('USA');
ForeignLanguages('Bulgaria');
ForeignLanguages('Argentina');