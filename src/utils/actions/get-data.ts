import { redirect } from "next/navigation"

export async function getDataHome() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_FULL}`, { next: { revalidate: 120 } })

        if (!res.ok) {
            throw new Error('Falha ao fazer o fetch data')
        }
        return res.json()

    } catch (error) {
        throw new Error('Falha ao trazer o fetch data')
    }
}

export async function getSubMenu() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_MENU}`, { next: { revalidate: 120 } })

        if (!res.ok) {
            throw new Error('Falha ao fazer o fetch data')
        }
        return res.json()

    } catch (error) {
        throw new Error('Falha ao trazer o fetch do menu data')
    }
}

export async function getItemBySlug(itemSlug: string) {
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`

    const queryParams = new URLSearchParams({
        query: JSON.stringify({
            slug: itemSlug
        }),
        props: 'slug,title,content,metadata',
        read_key: process.env.READ_KEY as string
    })
    const url = `${baseUrl}?${queryParams.toString()}`

    try {
        const res = await fetch(url, { next: { revalidate: 120 } })

        if (!res.ok) {
            throw new Error('Falha ao fazer iten via slug')
        }
        return res.json()


    } catch (error) {
        redirect('/')
    }

}