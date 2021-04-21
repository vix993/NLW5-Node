import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "./repositories/SettingsRepository";

const routes = Router();

// Parameter types
// Params => Route Parameters
// Query Params => Search and Filter
// Body Params => Request Body

routes.post("/settings", async (request, response) => {
    const { chat, username } = request.body;

    const settingsRepository = getCustomRepository(SettingsRepository);

    const settings = settingsRepository.create({
        chat,
        username
    });

    await settingsRepository.save(settings);

    return response.json(settings);
})

export { routes };