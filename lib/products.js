import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const productDirectory = path.join(process.cwd(), 'products')

export function getSortedProductData() {
  // Get file names under /products
  const fileNames = fs.readdirSync(productDirectory)
  const allProductData = fileNames.map(fileName => {
    // Remove ".yml" from file name to get id
    const id = fileName.replace(/\.yml/, '')

    // Read markdown file as string
    const fullPath = path.join(productDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the product metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort products by date
  return allProductData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllProductIds() {
  const fileNames = fs.readdirSync(productDirectory)

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'test'
  //     }
  //   }
  // ]
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.yml/, '')
      }
    }
  })
}

export function getProductData(id) {
  const fullPath = path.join(productDirectory, `${id}.yml`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the product metadata section
  const matterResult = matter(fileContents)

  // Combine the data with the id
  return {
    id,
    ...matterResult.data
  }
}
