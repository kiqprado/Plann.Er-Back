import fastify from 'fastify'
import cors from '@fastify/cors'
import { createTrip } from './routes/create-trip'
import { confirmTrip } from './routes/confirm-trip'
import { confirmParticipants } from './routes/confirm-participant'
import { createActivity } from './routes/create-activity'
import { createLink } from './routes/create-link'
import { createInvite } from './routes/create-invite'
import { getActivities } from './routes/get-activities'
import { getParticipants } from './routes/get-participants'
import { getLinks } from './routes/get-links'
import { updateTrip } from './routes/update-trip'
import { getTripDetails } from './routes/get-trip-details'
import { getParticipant } from './routes/get-participant'

import { errorHandler } from './error-handler'
import { validatorCompiler, serializerCompiler } from 'fastify-type-provider-zod'
import { env } from './env'

const app = fastify()

app.register(cors, {
  origin: '*'
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.setErrorHandler(errorHandler)

app.register(createTrip)
app.register(confirmTrip)
app.register(confirmParticipants)
app.register(createActivity)
app.register(getActivities)
app.register(createLink)
app.register(getLinks)
app.register(getParticipants)
app.register(createInvite)
app.register(updateTrip)
app.register(getTripDetails)
app.register(getParticipant)

app.listen({ port: env.PORT }).then(() => {
  console.log('Ain ze da manga')
})