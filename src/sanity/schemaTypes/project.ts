import { defineField, defineType } from 'sanity'

export const project = defineType({
    name: 'project',
    title: 'Project / Case Study',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Project Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Service Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Kitchen & Bath', value: 'kitchen-bath' },
                    { title: 'Full Remodel', value: 'remodel' },
                    { title: 'Exterior & Decks', value: 'exterior' },
                    { title: 'Precision Repairs', value: 'repairs' },
                ],
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
        }),
        defineField({
            name: 'completionDate',
            title: 'Timeline / Duration',
            type: 'string',
        }),
        defineField({
            name: 'images',
            title: 'Imagery',
            type: 'object',
            fields: [
                defineField({
                    name: 'before',
                    title: 'Before Image (Optional)',
                    type: 'image',
                    options: { hotspot: true },
                }),
                defineField({
                    name: 'after',
                    title: 'After Image (Required)',
                    type: 'image',
                    options: { hotspot: true },
                    validation: (rule) => rule.required(),
                }),
            ],
        }),
        defineField({
            name: 'caseStudy',
            title: 'Case Study Details',
            type: 'object',
            fields: [
                defineField({
                    name: 'challenge',
                    title: 'The Challenge',
                    type: 'text',
                    rows: 3,
                }),
                defineField({
                    name: 'solution',
                    title: 'The Solution',
                    type: 'text',
                    rows: 3,
                }),
            ],
        }),
    ],
})
