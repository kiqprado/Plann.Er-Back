import fastify from 'fastify'
import cors from '@fastify/cors'
import { createTrip } from './routes/create-trip'
import { confirmTrip } from './routes/confirm-trip'
import { confirmParticipants } from './routes/confirm-participant'
import { createActivity } from './routes/create-activity'
import { createLink } from './routes/create-link'
import { getActivities } from './routes/get-activities'
import { getParticipants } from './routes/get-participants'
import { getLinks } from './routes/get-links'

import { validatorCompiler, serializerCompiler } from 'fastify-type-provider-zod'

const app = fastify()

app.register(cors, {
  origin: '*'
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createTrip)
app.register(confirmTrip)
app.register(confirmParticipants)
app.register(createActivity)
app.register(getActivities)
app.register(createLink)
app.register(getLinks)
app.register(getParticipants)

app.listen({ port: 3333}).then(() => {
  console.log('Ain ze da manga')
})