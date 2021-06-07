/* eslint-disable max-len */
export default {
    common: {
        cancel: 'Cancelar',
        upload: 'Subir',
        yes: 'Si',
        no: 'No',
        attachment: 'Adjunto',
        to: 'A',
        optional: 'Opcional',
        new: 'NUEVO',
        search: 'Buscar',
        next: 'Siguiente',
        add: 'Agregar',
        resend: 'Reenviar',
        save: 'Guardar',
        password: 'Contraseña',
        profile: 'Perfil',
        payments: 'Pagos',
        preferences: 'Preferencias',
        view: 'Ver',
        not: 'No',
        signIn: 'Conectarse',
        continue: 'Continuar',
        phoneNumber: 'Numero de teléfono',
        email: 'Email',
        and: 'y',
        details: 'Detalles',
        delete: 'Eliminar',
        contacts: 'Contactos',
        recents: 'Recientes',
    },
    attachmentPicker: {
        cameraPermissionRequired: 'Se necesita permiso para usar la cámara',
        expensifyDoesntHaveAccessToCamera: 'Expensify.cash no tiene acceso a tu cámara, por favor activa el permiso y vuelve a intentarlo.',
        attachmentError: 'Error en el adjunto',
        errorWhileSelectingAttachment: 'Ha ocurrido un error al seleccionar un adjunto, por favor inténtalo de nuevo',
        errorWhileSelectingCorruptedImage: 'Ha occurrido un error al seleccionar un adjunto corrupto, por favor intenta otro archivo',
        errorDuringAttachmentSelection: 'Error durante la selección del adjunto',
        takePhoto: 'Sacar Foto',
        chooseFromGallery: 'Elegir de la galería',
        chooseDocument: 'Elegir Documento',
    },
    textInputFocusable: {
        noExtentionFoundForMimeType: 'No se encontró una extension para este tipo',
        problemGettingImageYouPasted: 'Ha ocurrido un problema obteniendo la imágen que has pegado',
    },
    baseUpdateAppModal: {
        updateApp: 'Actualizar App',
        updatePrompt: 'Esta disponible una nueva version de Expensify.cash.\nActualiza ahora or reinicia la aplicación luego para recibir la última version.',
    },
    iOUConfirmationList: {
        whoPaid: 'QUIÉN PAGO?',
        whoWasThere: 'QUIÉN ESTABA?',
        whatsItFor: 'PARA QUÉ ES?',
    },
    iOUCurrencySelection: {
        selectCurrency: 'Selecciona una moneda',
        allCurrencies: 'TODAS LAS MONEDAS',
    },
    optionsSelector: {
        nameEmailOrPhoneNumber: 'Nombre, email o número de teléfono',
    },
    videoChatButtonAndMenu: {
        zoom: 'Zoom',
        googleMeet: 'Google Meet',
    },
    hello: 'Hola',
    phoneCountryCode: '34',
    welcomeText: {
        phrase1: 'Con Expensify.cash, chat y pagos son lo mismo.',
        phrase2: 'El dinero habla. Y ahora que chat y pagos están en un mismo lugar, es también fácil.',
        phrase3: 'Tus pagos llegan tan rápido como tus mensajes.',
    },
    reportActionCompose: {
        uploadAttachment: 'Subir Adjunto',
        addAttachment: 'Agregar Adjunto',
        writeSomething: 'Escribe algo...',
        youAppearToBeOffline: 'Parece que estás desconectado.',
    },
    reportActionContextMenu: {
        copyToClipboard: 'Copiar al Porta Papeles',
        copied: 'Copiado!',
        copyLink: 'Copiar Enlace',
        markAsUnread: 'Marcar como no leído',
        editComment: 'Editar Commentario',
        deleteComment: 'Eliminar comentario',
        deleteConfirmation: 'Estás seguro de que quieres eliminar este comentario?',
    },
    reportActionsView: {
        beFirstPersonToComment: 'Se el primero en comentar',
    },
    reportTypingIndicator: {
        isTyping: 'está escribiendo...',
        areTyping: 'están escribiendo...',
        multipleUsers: 'Varios usuarios',
    },
    sidebarScreen: {
        newChat: 'Nuevo Chat',
        newGroup: 'Nuevo Grupo',
        headerChat: 'Chats',
        buttonSearch: 'Buscar',
        buttonMySettings: 'Mi configuración',
        fabNewChat: 'Nuevo Chat',
    },
    iou: {
        amount: 'Importe',
        participants: 'Participantes',
        confirm: 'Confirmar',
        splitBill: 'Dividir Factura',
        requestMoney: 'Pedir Dinero',
        pay: 'Pagar',
        viewDetails: 'Ver detalles',
        settleElsewhere: 'Voy a pagar por otro medio',
        decline: 'Rechazar',
        settlePaypalMe: 'Pagar con PayPal.me',
        settleVenmo: 'Pagar con Venmo',
        request: ({amount}) => `Request ${amount}`,
        owes: ({manager, owner}) => `${manager} debe a ${owner}`,
        paid: ({owner, manager}) => `${manager} pagó a ${owner}`,
        split: ({amount}) => `Dividir ${amount}`,
        choosePaymentMethod: 'Elige el método de pago:',
    },
    loginField: {
        addYourPhoneToSettleViaVenmo: 'Agrega tu número de teléfono para pagar usando Venmo.',
        numberHasNotBeenValidated: 'El número no está validado todavía. Haz click en el botón para reenviar el enlace de validación via SMS.',
        useYourPhoneToSettleViaVenmo: 'Usa tu número de teléfono para pagar usando Venmo.',
        emailHasNotBeenValidated: 'El email no está validado todavía. Haz click en el botón para reenviar el enlace de validación via email.',
    },
    profilePage: {
        uploadPhoto: 'Subir Foto',
        removePhoto: 'Eliminar Foto',
        profile: 'Perfil',
        editPhoto: 'Editar Foto',
        tellUsAboutYourself: '¡Cuéntanos algo sobre tí, nos encantaría conocerte!',
        firstName: 'Nombre',
        john: 'Juan',
        lastName: 'Apellido',
        doe: 'Nadie',
        preferredPronouns: 'Pronombres preferidos',
        selectYourPronouns: 'Selecciona tus pronombres',
        selfSelectYourPronoun: 'Auto-selecciona tu pronombre',
        emailAddress: 'Dirección de Email',
        setMyTimezoneAutomatically: 'Configura my huso horario automáticamente',
        timezone: 'Huso horario',
        growlMessageOnSave: 'Tu perfil se ha guardado correctamente',
    },
    addSecondaryLoginPage: {
        addPhoneNumber: 'Agregar Número de Teléfono',
        addEmailAddress: 'Agregar dirección de Email',
        enterPreferredPhoneNumberToSendValidationLink: 'Escribe tu número de teléfono y contraseña para recibir el enlace de validación.',
        enterPreferredEmailToSendValidationLink: 'Escribe tu email y contraseña para recibir el enlace de validación.',
        sendValidation: 'Enviar validación',
    },
    initialSettingsPage: {
        settings: 'Configuración',
        about: 'Acerca de',
        aboutPage: {
            description: 'Expensify.cash está desarrollado por una comunidad de desarrolladores open source de todo el mundo. Ven a ayudarnos a construir la próxima generación de Expensify.',
            appDownloadLinks: 'Enlaces para descargar la App',
            viewTheCode: 'Ver codigo',
            viewOpenJobs: 'Ver trabajos disponibles',
            reportABug: 'Reporta un bug',
        },
        appDownloadLinks: {
            android: {
                label: 'Android',
            },
            ios: {
                label: 'iOS',
            },
            desktop: {
                label: 'Desktop',
            },
        },
        signOut: 'Desconectar',
        versionLetter: 'v',
        changePassword: 'Cambiar Contraseña',
        readTheTermsAndPrivacyPolicy: {
            phrase1: 'Leer los',
            phrase2: 'términos de servicio',
            phrase3: 'y',
            phrase4: 'política de privacidad',
        },
    },
    passwordPage: {
        changePassword: 'Cambiar Contraseña',
        changingYourPasswordPrompt: 'El cambio de contraseña va a afectar tanto a la cuenta de Expensify.com\ncomo la de Expensify.cash.',
        currentPassword: 'Contraseña Actual',
        newPassword: 'Nueva contraseña',
        newPasswordPrompt: 'La nueva contraseña tiene que ser diferente de la antigua, tener al menos 8 letras,\n1 letra mayúscula, 1 letra minúscula y 1 numero.',
        confirmNewPassword: 'Confirma la Nueva Contraseña',
    },
    paymentsPage: {
        enterYourUsernameToGetPaidViaPayPal: 'Escribe to nombre de usuario para que te paguen a través de PayPal.',
        payPalMe: 'PayPal.me/',
        yourPayPalUsername: 'Tu usuario de PayPal',
        addPayPalAccount: 'Agregar Cuenta de Paypal',
    },
    preferencesPage: {
        mostRecent: 'Mas Recientes',
        mostRecentModeDescription: 'Esto va a mostrar por defecto todos los chats, ordenados por mas reciente primeros, con items anclados arriba de todo',
        focus: '#focus',
        focusModeDescription: '#focus – Esto va a mostrar solo chats no leídos y anclados ordenados alfabéticamente.',
        notifications: 'Notificaciones',
        receiveRelevantFeatureUpdatesAndExpensifyNews: 'Recibir noticias sobre Expensify y actualizaciones del producto',
        priorityMode: 'Modo Prioridad',
    },
    signInPage: {
        expensifyDotCash: 'Expensify.cash',
        expensifyIsOpenSource: 'Expensify.cash es open source',
        theCode: 'el código',
        openJobs: 'trabajos disponibles',
    },
    termsOfUse: {
        phrase1: 'Al ingresar, estas aceptando los',
        phrase2: 'términos de servicio',
        phrase3: 'y',
        phrase4: 'política de privacidad',
        phrase5: '. El envío de dinero es brindado por Expensify Payments LLC (NMLS ID:2017010) de conformidad con sus',
        phrase6: 'licencias',
    },
    passwordForm: {
        pleaseFillOutAllFields: 'Por favor completa todos los campos',
        forgot: 'Te has olvidado?',
        twoFactorCode: 'Autenticación de 2 factores',
        requiredWhen2FAEnabled: 'Obligatorio cuando A2F esta habilitado',
    },
    loginForm: {
        pleaseEnterEmailOrPhoneNumber: 'Por favor escribe un email o número de teleéfono',
        phoneOrEmail: 'Teleéfono o Email',
        enterYourPhoneOrEmail: 'Escribe tu teleéfono o email:',
    },
    resendValidationForm: {
        linkHasBeenResent: 'El enlace se ha reenviado',
        weSentYouMagicSignInLink: 'Te hemos enviado un enlace - simplemente haz click en él para conectarte!',
        resendLink: 'Reenviar Enlace',
    },
    detailsPage: {
        localTime: 'Hora local',
    },
    newGroupPage: {
        createGroup: 'Crear Grupo',
    },
    notFound: {
        chatYouLookingForCannotBeFound: 'No se pudo encontrar el chat que estabas buscando.',
        getMeOutOfHere: 'Sácame de aquí',
    },
    setPasswordPage: {
        passwordCannotBeBlank: 'La contraseña no puede estar vacía',
        enterPassword: 'Escribe una contraseña',
        setPassword: 'Configura tu Contraseña',
    },
    addBankAccountPage: {
        enterPassword: 'Escribe una contraseña',
        addBankAccount: 'Agregar una cuenta de banco',
        alreadyAdded: 'Esta cuenta ya ha sido agregada.',
        selectAccount: 'Selecciona una cuenta:',
    },
    attachmentView: {
        unknownFilename: 'Archivo desconocido',
    },
    pronouns: {
        heHimHis: 'El',
        sheHerHers: 'Ella',
        theyThemTheirs: 'Ellos',
        zeHirHirs: 'Ze/hir',
        selfSelect: 'Personalízalo',
        callMeByMyName: 'Llámame por mi nombre',
    },
    cameraPermissionsNotGranted: 'No has habilitado los permisos para acceder a la cámara',
    messages: {
        noPhoneNumber: 'Por favor escribe un número de teléfono que incluya el código de país e.g +447814266907',
        maxParticipantsReached: 'Has llegado al número máximo de participantes para un grupo.',
    },
    session: {
        offlineMessage: 'Parece que no estás conectado a internet. Comprueba to conexión e inténtalo de nuevo?',
    },
};
