const formatDate = (date: string): string => {

    const dateFormatted = new Date(date)

    const day = dateFormatted.getDate()

    const month = dateFormatted.getMonth() + 1

    const year = dateFormatted.getFullYear()

    return `${day}/${month}/${year}`
}

export default formatDate