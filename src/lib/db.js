import PocketBase from 'pocketbase'
import { url } from "$lib/utils/getUrls"

export const pb = new PocketBase(url);