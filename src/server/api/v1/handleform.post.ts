export default defineEventHandler(async (event) => {
  const result = await readValidatedBody(event, (body) =>
    Schema.form.safeParse(body)
  );

  if (!result.success) throw result.error.issues;

  try {
    const vercel = readVercelHeaders(event);
    const sheets = GoogleSheets();
    const now = new Date().toISOString();

    
    const body = result.data;
    const config = useRuntimeConfig()
    // @ts-expect-error - Types from google are broken :(
    await sheets.spreadsheets.values.append({
      spreadsheetId: config.google.sheet ?? "< Sheets id >",
      range: "Cadastro!A3",
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [
          [
            body.name,
            body.phone,
            body.email,
            body.message,
            now,
            vercel.ip,
            vercel.city,
            vercel.state,
            vercel.host,
          ],
        ],
      },
    });

    return { message: "Sucesso!" };
  } catch (err) {
    return sendError(
      event,
      createError({
        statusCode: 500,
        statusMessage: "Erro ao cadastrar!",
      })
    );
  }
});
